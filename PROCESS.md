# Process overview

## What I built

SLOP6531 *The Unpaid Shift*, a postgraduate course about the unpaid janitorial
work that keeps Wikipedia, every subreddit, OpenStreetMap and half of open
source running. Students pick one real project in week 1 and contribute to it
every week until week 12, and the weeks move them from newcomer through
contributor and steward to handing it over to next year's cohort.

## How I got here

I started with a subject area rather than a course — things people do online
that nobody teaches — and the first real decision was realising this wasn't
yet a course at all. A subject area will generate content forever, which is what
Claude is good at and how you end up with twelve weeks nobody would notice
you'd shuffled. So before letting it write any
pages I wrote the premise down as one sentence and put it at the top of
`CLAUDE.md` as a test every page has to pass
([`3ec9ab1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/3ec9ab1)). Two pages still slipped through, since the
People index was a bare grid and the 404 could have belonged to any course on
earth, and because the rule says rewrite rather than patch I threw both out
([`efbf960`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/efbf960)).

The thing I went back and forth on longest was where the satire points. The
obvious target is the material itself, people arguing about railway station
dates at midnight, and I dropped it, because students on this course
contribute alongside those people for real and a site that mocks them makes
that indefensible. The rule I gave Claude instead was at the university, never
at the volunteers — SlopU solemnly credentialing the work with rostered Shifts
and a Continuity of Service policy, while burnout and moderator capture stay
material rather than punchlines.

Choosing real projects over reconstructed ones forced everything else. Once
students are editing live articles the policies page stops being boilerplate
and becomes the thing that makes the course defensible, so the contributor
undertaking is four clauses and week 1 is two hours of admin with no editing
in it ([`b7f4a3d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/b7f4a3d)). I put that into `spec/` rather than
trusting myself to still care about it in week 9.

I also ran my own style rules over the built HTML, and the first thing they
caught was a rule I'd got wrong rather than a bad sentence. "Leverage" is the
correct noun for what a volunteer withholding labour actually holds and week
10 is built on it, so I narrowed the ban to the verb instead of rewriting the
best line in that lecture ([`c96f4f1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/c96f4f1)).

The rule that did the most for the prose is also the one that nearly sank it.
"Specifics or nothing" is why the course reads like it was written by someone
who has done this work, but a generality can't be wrong and a specific can, so
I checked every real-world claim on the site against a source and nine of them
weren't true. One was the ratio the whole course opens on — thirty thousand is
Wikipedia's five-edit threshold, not its hundred-edit one, and I'd already
built a slide around it ([`3237916`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/3237916)). Claude writes
plausible specifics exactly as fluently as true ones, which I hadn't
considered.

What I deliberately left out is coherence. I can check that twelve weeks
exist, that each says what leaves the room and that assessment sums to 100,
but whether the arc actually holds isn't something I know how to test, so I
didn't write a check pretending to. That one is the crit's job.

The whole build: [`cfbbfc3...main`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/compare/cfbbfc3...main).
