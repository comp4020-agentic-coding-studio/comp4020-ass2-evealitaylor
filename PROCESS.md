# Process overview

## What I built

SLOP6531 *The Unpaid Shift*. A postgraduate course about the unpaid janitorial
work that keeps Wikipedia, every subreddit and half of open source running.
Twelve weeks, newcomer to handover, contributing to a real project the whole
way.

## How I got here

I started with a subject area rather than a course: things people do online
that nobody teaches. That was the problem. A subject area generates content
forever, which is what an agent is good at, and it is also how you end up with
twelve weeks nobody would notice you had shuffled.

So before any page existed I wrote the premise as one sentence and put it at
the top of `CLAUDE.md` ([`3ec9ab1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/3ec9ab1)). Any page that would
sit just as happily in a generic digital-citizenship course gets rewritten,
not patched. Two slipped through anyway. The People index was a bare grid and
the 404 could have belonged to any course on earth, and I threw both out late
on ([`efbf960`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/efbf960)).

The thing I went back and forth on longest was where the satire points. The
obvious target is the material: people arguing about railway station dates at
midnight. I dropped it. Students here contribute alongside those people for
real, and a site that mocks them makes that indefensible. So the rule became
at the university, never at the volunteers. SlopU solemnly credentialing the
work, rostered Shifts, a Continuity of Service policy, while burnout and
moderator capture stay material rather than punchlines.

The rest followed from using real projects instead of reconstructed ones. If
students edit live articles then the policies page stops being boilerplate and
becomes the thing that makes the course defensible. The undertaking is four
clauses. Week 1 is admin with no editing in it
([`b7f4a3d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/b7f4a3d)). I put that in `spec/` rather than trust
myself to remember it in week 9.

I ran my own style rules over the built HTML too. The first thing they caught
was a rule I had got wrong. "Leverage" is the right noun for what a volunteer
withholding labour holds, week 10 is built on it, so I narrowed the ban to the
verb instead of rewriting the best sentence in that lecture
([`c96f4f1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/c96f4f1)).

The rule that did most for the prose is the one that nearly sank it. Specifics
or nothing: real platforms, real years, real disputes. A generality cannot be
wrong. A specific can. So I checked every real-world claim on the site against
a source, and nine of them were not true. One was the ratio the whole course
opens on. Thirty thousand is Wikipedia's five-edit threshold, not its
hundred-edit one, and I had built a slide on it
([`3237916`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/3237916)). An agent writes plausible specifics as
fluently as true ones.

What I left out is coherence. I can check that twelve weeks exist, that each
says what leaves the room, that assessment sums to 100. Whether the arc holds
is not something I know how to test, so I did not write a check pretending to.
That one is the crit's job.

The whole build: [`cfbbfc3...main`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/compare/cfbbfc3...main).
