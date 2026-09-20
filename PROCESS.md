# Process overview

## What I built

SLOP6531 *The Unpaid Shift*: a postgraduate course arguing that Wikipedia,
every subreddit and half of open source are maintained by unpaid people doing
janitorial work under rules they learned by being told off, and that this is
teachable. Twelve weeks take a student from newcomer to steward to handover,
contributing to a real project the whole way.

## How I got here

I started with a subject area — "things people do online that nobody teaches" —
and the first real decision was recognising that this was not yet a course. A
subject area generates content indefinitely, which is exactly what an agent is
good at and exactly what produces twelve interchangeable weeks. So before any
page existed I wrote the premise as one sentence and put it at the top of
`CLAUDE.md` as a test every page has to pass: a page that would sit just as
happily in a generic digital-citizenship course gets rewritten, not patched
([`3ec9ab1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/3ec9ab1)).

The call I spent longest on was where the satire points. I wanted the register
openly satirical, and the obvious target is the material itself — people
arguing about railway station dates at midnight. I rejected that, because the
course requires students to contribute alongside those people for real, and a
site that mocks them makes that requirement indefensible. The harness rule is
"at the university, never at the volunteers": SlopU solemnly credentialing
unpaid work, with rostered Shifts and a Continuity of Service policy, while
burnout and moderator capture are treated as material rather than as jokes.
Every page was written against that line, and it is the rule that did the most
work.

Choosing real contributions over reconstructed ones forced the rest. If
students edit live projects, the policies page stops being boilerplate and
becomes the thing that makes the course defensible, so the contributor
undertaking is four clauses and week 1 is two hours of admin with no editing in
it ([`b7f4a3d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/b7f4a3d)). I encoded that in `spec/` rather than
trusting myself: the undertaking must be published, carry all four clauses, and
be reachable from the two pages that rely on it.

I also put my own style rules under test, running the slop ban list over the
rendered HTML. That immediately caught something — and the rule was wrong, not
the prose. "Leverage" is the correct noun for what a volunteer withholding
labour holds, and week 10 is built on it, so I narrowed the rule to the verb
instead of rewriting the best sentence in the lecture
([`c96f4f1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/c96f4f1)). A harness rule that costs you accuracy is a
rule to change.

What I deliberately left out is coherence. I can test that twelve weeks exist,
that each declares what leaves the room, and that assessment sums to 100. I
cannot test whether the arc holds, so I did not write a check that pretends to
— that is the crit's job, and a green suite that implied otherwise would be
worse than no suite.

The full build, from empty harness to deployed site:
[`cfbbfc3...2991892`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/compare/cfbbfc3...2991892).
