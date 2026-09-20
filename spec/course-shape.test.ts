// What has to stay true about SLOP6531's curriculum.
//
// The course's claim is that it carries one arc — newcomer, contributor,
// steward, handover — across twelve paired weeks, and that every week hands
// something to the Contribution Log. These tests hold that claim to the built
// site rather than to my intentions about it. They check contracts, not
// construction: which weeks exist, what each one promises, what adds to 100.
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  title: string;
  spec?: string[];
  related?: string[];
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { startDate: string; endDate: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string): ApiNode[] => api.nodes.filter((node) => node.type === type);

const WEEKS = Array.from({ length: 12 }, (_, i) => i + 1);
const sessions = byType("sessions");
const lectures = byType("lectures");
const assessments = byType("assessments");
const people = byType("people");

const day = (value: unknown): string => String(value).slice(0, 10);

describe("twelve paired weeks", () => {
  it("runs weeks 1 to 12 with no gaps and no doubling up", () => {
    expect(sessions.map((s) => s.meta?.week).sort((a, b) => Number(a) - Number(b))).toEqual(WEEKS);
    expect(lectures.map((l) => l.meta?.week).sort((a, b) => Number(a) - Number(b))).toEqual(WEEKS);
  });

  it("gives every week a lecture and a Shift on the same day", () => {
    for (const week of WEEKS) {
      const lecture = lectures.find((l) => l.meta?.week === week);
      const shift = sessions.find((s) => s.meta?.week === week);
      expect(lecture, `week ${week} has no lecture`).toBeDefined();
      expect(shift, `week ${week} has no Shift`).toBeDefined();
      expect(day(lecture?.meta?.date), `week ${week} lecture and Shift disagree on the date`).toBe(
        day(shift?.meta?.date),
      );
    }
  });

  it("keeps the teaching weeks in order", () => {
    const dates = WEEKS.map((week) => day(sessions.find((s) => s.meta?.week === week)?.meta?.date));
    expect([...dates].sort()).toEqual(dates);
  });
});

describe("every Shift is designed", () => {
  // A Shift that cannot say what leaves the room is a week that has not been
  // designed yet. Weeks 2-11 are what the Contribution Log is assembled from.
  it("declares what it produces", () => {
    for (const shift of sessions) {
      const produces = shift.meta?.produces;
      expect(typeof produces, `${shift.id} declares no produces:`).toBe("string");
      expect(String(produces).length, `${shift.id} produces: is too vague to be an artefact`).toBeGreaterThan(20);
    }
  });

  it("gives students a checkable contract to arrive against", () => {
    for (const shift of sessions) {
      expect(shift.spec?.length ?? 0, `${shift.id} has fewer than three spec lines`).toBeGreaterThanOrEqual(3);
    }
  });

  it("is staffed by somebody in the cast", () => {
    const cast = new Set(people.map((p) => p.id.replace(/^people\//, "")));
    for (const node of [...sessions, ...lectures]) {
      const teachers = (node.meta?.teachers ?? []) as string[];
      expect(teachers.length, `${node.id} names no teacher`).toBeGreaterThan(0);
      for (const teacher of teachers) {
        expect(cast.has(teacher), `${node.id} names ${teacher}, who is not in the cast`).toBe(true);
      }
    }
  });
});

describe("assessment", () => {
  it("adds up to exactly 100", () => {
    const total = assessments.reduce((sum, a) => sum + Number(a.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });

  it("says how each item is marked", () => {
    for (const item of assessments) {
      expect(item.meta?.marking, `${item.id} carries no marking model`).toBeDefined();
    }
  });

  it("falls due in the week it claims", () => {
    for (const item of assessments) {
      const week = Number(item.meta?.week);
      const teachingDay = day(sessions.find((s) => s.meta?.week === week)?.meta?.date);
      const due = day(item.meta?.due);
      expect(due >= teachingDay, `${item.id} is due before week ${week} is taught`).toBe(true);
      const sevenDaysOn = new Date(`${teachingDay}T00:00:00Z`);
      sevenDaysOn.setUTCDate(sevenDaysOn.getUTCDate() + 7);
      expect(due < sevenDaysOn.toISOString().slice(0, 10), `${item.id} falls outside week ${week}`).toBe(true);
    }
  });

  it("keeps the Contribution Log running to the end of the contributing weeks", () => {
    const log = assessments.find((a) => a.id.endsWith("contribution-log"));
    expect(log, "the Contribution Log is the spine of the course and must exist").toBeDefined();
    expect(Number(log?.meta?.week)).toBe(11);
  });
});

describe("the lecture series", () => {
  it("carries at least one real deck, on a lecture that exists", () => {
    const withDecks = lectures.filter((l) => typeof l.meta?.slides === "string");
    expect(withDecks.length).toBeGreaterThan(0);
    for (const lecture of withDecks) {
      expect(String(lecture.meta?.slides)).toMatch(/^\/decks\/[a-z0-9-]+\/$/);
    }
  });

  it("connects each lecture to the Shift it sets up", () => {
    for (const lecture of lectures) {
      const week = Number(lecture.meta?.week);
      const shift = sessions.find((s) => s.meta?.week === week);
      const edges = lecture.related ?? [];
      expect(edges.includes(shift?.id ?? ""), `week ${week}'s lecture does not link its Shift`).toBe(true);
    }
  });
});
