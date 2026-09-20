# Harness — SLOP6531 *The Unpaid Shift*

The platform is documented in `README.md` and is not restated here. This file is
the course's editorial contract: what has to be true of the curriculum and the
prose, expressed as rules an agent can be held to.

## The one idea

Wikipedia, every subreddit, OpenStreetMap and half of open source are maintained
by unpaid people doing janitorial work under rules they learned by being told
off. This course takes that work seriously — as a craft with transferable skill,
and as a labour question. Every page must be traceable back to that sentence. A
page that would sit just as happily in a generic "digital citizenship" course is
off-spine and gets rewritten, not patched.

The arc is fixed: **newcomer → contributor → steward → handover.** Weeks move
along it. A week that could be swapped with another week without anyone noticing
is a failed week.

## Where the satire points

At the university, never at the volunteers.

The joke is that Slop University has solemnly credentialed unpaid internet
janitorial work: rostered shifts, learning outcomes for mopping, a Continuity of
Service policy, a marking rubric for ban appeals. The register is
straight-faced institutional prose applied to subjects universities find beneath
them, and it never winks.

The people on the other end of the queue — editors, mods, mappers, maintainers —
are treated with complete respect, because students in this course will be
contributing alongside them for real. **Never write a line that mocks a
volunteer for caring.** Burnout, unpaid overwork and moderator capture are
material to take seriously, not punchlines.

## Prose rules

- **No slop.** Ban list: "delve", "navigate the landscape", "in today's digital
  age", "unpack", "robust", "tapestry", "journey", "empower", "dive into",
  "it's not just X, it's Y". Also banned: the three-item list used as a rhythm
  device when two items or four would be truer.
  "Leverage" is banned **as a verb only**. The noun is the correct word for what
  a volunteer withholding labour actually has, and week 10 needs it. A style
  rule that costs the course its most precise sentence is the wrong rule;
  `spec/course-voice.test.ts` holds the narrowed version.
- **Specifics or nothing.** Name the real platform, the real policy shortcut
  (WP:BRD, WP:N, AutoModerator, CSD G11), the real year, the real dispute. A
  sentence that could be written by someone who had never done this work is
  deleted.
- **Short sentences carry the jokes.** The register does the comedy; adjectives
  do not.
- **Second person, present tense**, for anything a student does.
- Never open a page by restating its own title back to the reader.

## Curriculum rules

- Twelve dated teaching weeks. Each week has exactly one lecture and exactly
  one Shift, and they carry the same `week:` number and the same date.
- Every Shift declares a `produces:` key naming the artefact that leaves the
  room. Weeks 2–11 feed the Contribution Log; if a Shift cannot say what it
  contributes, the week is not designed yet.
- Assessment totals exactly 100% across four items, and every assessment page
  carries a `marking:` block.
- Facts about the course record live in `src/course-config.ts` and are never
  restated in prose.
- Real contributions mean real people are affected. The policies page owns the
  ethics of that and is load-bearing content, not boilerplate.

## Working rules

- `pnpm check` stays green. Run it before any commit that touches content.
- Commit in coherent slices with messages that say what changed about the
  *course*, not about the files.
- Before adding a page, say which rule above it satisfies. If none, don't add
  it.
