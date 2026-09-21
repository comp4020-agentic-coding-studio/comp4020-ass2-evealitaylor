# Process overview

## What I built

SLOP6531 *The Unpaid Shift*, a postgraduate course about the unpaid janitorial
work that keeps Wikipedia, every subreddit, OpenStreetMap and half of open
source running. Students pick a real project in week 1 and contribute every week
until week 12, moving from newcomer through contributor and steward
to handing it to next year's cohort.

## How I got here

I started with a subject area rather than a course, things people do online that nobody
teaches, and it took a while to notice that wasn't a course yet. A subject
area seems to generate content forever, which is what Claude is good at, and I
could see it heading for twelve weeks you could shuffle without anyone
noticing. So before letting it write anything I put the premise down as one
sentence at the top of `CLAUDE.md` and tested pages against it
([`3ec9ab1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/3ec9ab1)). It mostly worked, though two pages still got
past it. The People index was just a grid and the 404 could have come from any
course, and since the rule says rewrite rather than patch I threw both
out fairly late ([`efbf960`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/efbf960)).

The bit I went back and forth on most was where the satire pointed. The
obvious target is the material itself, people arguing about railway station
dates at midnight, and I was happy with that for a while before it
bothered me. Students here contribute alongside those people for
real, and I didn't think I could ask that while making fun of them on the same
site. What I gave Claude instead was at the university, never at the volunteers — SlopU takes the work extremely seriously,
with rostered Shifts and a Continuity of Service policy, and burnout
and moderator capture stay material rather than jokes. I think that rule did more than
anything else I wrote.

Going with real projects rather than made-up ones seemed to settle a lot of
the rest. Once students are editing live articles the policies page
can't really be boilerplate, so the contributor undertaking is four clauses
and week 1 is two hours of admin with no editing in it
([`b7f4a3d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/b7f4a3d)). I put that into `spec/` because I wasn't
confident I'd still treat it as important by week 9.

I also ran my own style rules over the built HTML, and the first thing they
flagged was a problem with the rule and not the writing. I had started
rewriting the sentence before realising "leverage" is the right noun for what a volunteer withholding labour actually has, and week 10 leans
on it, so I narrowed the ban to the verb instead
([`c96f4f1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/c96f4f1)).

The rule I'm least sure about is specifics or nothing. It's probably why the
course reads like someone who has done this work wrote it — but a vague
sentence can't really be wrong and a specific one can, so late on I checked every
real-world claim against a source. Nine weren't true.
One was the ratio the whole course opens on: thirty thousand turned out
to be Wikipedia's five-edit threshold rather than its hundred-edit one, and
I'd already built a slide on it ([`3237916`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/3237916)). Claude seems
to write plausible specifics about as easily as true ones, which I hadn't thought about.

What I left out is coherence. I can check twelve weeks exist, that each says what
leaves the room, that assessment adds to 100 — but I don't really know how
you'd test whether the arc holds, so I didn't write something
pretending to. That's probably the crit's job.

The whole build: [`cfbbfc3...main`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/compare/cfbbfc3...main).
