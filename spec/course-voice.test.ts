// The editorial contract from CLAUDE.md, checked against what actually shipped.
//
// A style rule an agent agreed to in a harness file and then quietly broke on
// page nineteen is not a rule. These run over the rendered HTML, because the
// promise is about what a reader sees, not about what the markdown said.
import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";

const DIST = resolve("dist");

function htmlFiles(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) htmlFiles(path, out);
    else if (entry.name.endsWith(".html")) out.push(path);
  }
  return out;
}

/** Visible page text, near enough: scripts and styles out, tags out. */
function visibleText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;|&#\d+;/gi, " ")
    .replace(/\s+/g, " ");
}

const pages = htmlFiles(DIST).map((path) => ({
  path: path.slice(DIST.length + 1),
  html: readFileSync(path, "utf8"),
}));

describe("prose", () => {
  // The ban list from CLAUDE.md. These are the words that show up when nobody
  // has decided what the sentence is for.
  const BANNED = [
    "delve",
    "navigate the landscape",
    "in today's digital age",
    "dive into",
    "unpack",
    "robust",
    "tapestry",
    "journey",
    "empower",
    "seamless",
    "ever-evolving",
  ];

  it("ships none of the slop vocabulary", () => {
    const found: string[] = [];
    for (const page of pages) {
      const text = visibleText(page.html).toLowerCase();
      for (const word of BANNED) {
        if (text.includes(word)) found.push(`${page.path}: "${word}"`);
      }
    }
    expect(found, `banned vocabulary in the built site:\n${found.join("\n")}`).toEqual([]);
  });

  it("never reaches for the not-just-X-its-Y construction", () => {
    // The one banned item that is a shape rather than a word. It promises a
    // reframing and delivers a synonym.
    const shape = /\b(?:it'?s|it is) not (?:just|only) [^,.]{2,40}, (?:it'?s|it is)\b/i;
    const offenders = pages.filter((page) => shape.test(visibleText(page.html)));
    expect(offenders.map((page) => page.path)).toEqual([]);
  });

  it("uses leverage only as a noun", () => {
    // Narrowed deliberately. The noun is the right word for what a volunteer
    // withholding labour actually holds, and week 10 is built on it. The verb
    // is the one that means nothing.
    const verb = /\bleverag(?:e[sd]?|ing)\s+(?:the|our|their|its|a|an|this)\b/i;
    const offenders = pages.filter((page) => verb.test(visibleText(page.html)));
    expect(offenders.map((page) => page.path)).toEqual([]);
  });
});

describe("the contributor undertaking", () => {
  // The course sends students into communities of real people. The undertaking
  // is the thing that makes that defensible, so it has to exist, have all four
  // clauses, and be reachable from the pages that rely on it.
  const policies = pages.find((page) => page.path.startsWith("policies/"));

  it("is published", () => {
    expect(policies, "the policies page is load-bearing content, not optional").toBeDefined();
  });

  it("states all four clauses", () => {
    const text = visibleText(policies?.html ?? "");
    for (const clause of [
      "good faith",
      "disclose that you are a student",
      "do not experiment on people",
      "clean up after yourself",
    ]) {
      expect(text.toLowerCase(), `the undertaking is missing: ${clause}`).toContain(clause);
    }
  });

  it("is reachable from week 1 and from the assessment that needs it", () => {
    const linksToPolicies = (path: string): boolean => {
      const page = pages.find((p) => p.path.startsWith(path));
      expect(page, `${path} did not build`).toBeDefined();
      return /href="[^"]*\/policies\/?"/.test(page?.html ?? "");
    };
    expect(linksToPolicies("sessions/01-induction"), "week 1 must link the undertaking").toBe(true);
    expect(
      linksToPolicies("assessments/conflict-autopsy"),
      "the autopsy writes about living people and must link the rules for it",
    ).toBe(true);
  });
});

describe("assessment briefs", () => {
  it("each state the problem in a pull quote before the mechanics", () => {
    const briefs = pages.filter(
      (page) => page.path.startsWith("assessments/") && !page.path.startsWith("assessments/index"),
    );
    expect(briefs.length).toBe(4);
    for (const brief of briefs) {
      expect(brief.html, `${brief.path} has no blockquoted brief`).toContain("<blockquote");
    }
  });
});

describe("the cast", () => {
  // The People page argues that the automated moderator belongs with the
  // staff rather than filed under infrastructure, because in most communities
  // it makes the first decision on nearly everything. A bot rendered without
  // the role every human gets is the page quietly conceding the argument.
  //
  // This is here because it already broke once: the role label lived in three
  // separate copies, and the only role none of them knew was the bot's.
  const profiles = pages.filter(
    (page) => page.path.startsWith("people/") && !page.path.startsWith("people/index"),
  );

  it("gives every member of the cast a rendered role", () => {
    expect(profiles.length).toBeGreaterThanOrEqual(4);
    for (const profile of profiles) {
      expect(profile.html, `${profile.path} renders no role`).toContain("<dt>Role</dt>");
    }
  });

  it("never prints a role in the raw lowercase the frontmatter stores", () => {
    for (const profile of profiles) {
      const role = profile.html.match(/<dt>Role<\/dt><dd>([^<]+)<\/dd>/)?.[1] ?? "";
      expect(role, `${profile.path} prints an unlabelled role`).toMatch(/^[A-Z]/);
    }
  });

  it("lists the automated moderator alongside the humans", () => {
    const index = pages.find((page) => page.path.startsWith("people/index"));
    expect(visibleText(index?.html ?? "")).toContain("ShiftBot");
  });
});

describe("the published handover", () => {
  // Week 12 requires a handover a stranger can read without asking anyone,
  // and the Continuity of Service policy is the course's joke about what
  // happens when nobody files one. The sandbox page is the course meeting its
  // own requirement. Without it, five weeks of the curriculum point at
  // documents no prospective student can see.
  const sandbox = pages.find((page) => page.path.startsWith("sandbox/"));

  it("is published", () => {
    expect(sandbox, "weeks 7 to 12 point at the sandbox; it has to exist").toBeDefined();
  });

  it("shows the ruleset, the machine's share of it, and why each rule exists", () => {
    const text = visibleText(sandbox?.html ?? "").toLowerCase();
    expect(text, "the register is the part week 12 says is the only part anyone needed").toContain(
      "rationale register",
    );
    expect(
      sandbox?.html,
      "the config has to be the actual config, not a description of one",
    ).toContain("<code");
    expect(text, "the ruleset must say which rules ShiftBot enforces").toContain("shiftbot");
  });

  it("is reachable from the weeks that rely on it", () => {
    for (const path of ["sessions/07-writing-the-rules", "sessions/11-bot-audit"]) {
      const page = pages.find((p) => p.path.startsWith(path));
      expect(page, `${path} did not build`).toBeDefined();
      expect(
        /href="[^"]*\/sandbox\/?"/.test(page?.html ?? ""),
        `${path} names the sandbox and must link it`,
      ).toBe(true);
    }
  });
});
