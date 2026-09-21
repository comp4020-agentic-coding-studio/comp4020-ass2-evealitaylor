# Process overview

## What I built

SLOP6531 *The Unpaid Shift*, a postgraduate course about the unpaid janitorial
work that keeps Wikipedia, every subreddit and half of open source running.
Students pick a real project in week 1 and contribute every week,
moving from newcomer to contributor to steward to handover.

## How I got here

What I struggled with most was finding a topic that wasn't too broad. I started
with the meaning of life — obviously too broad, and something universities
have taught forever. So I went digging around on Reddit
instead, to see what people said they'd want out of a class, and it struck me that the people modding those subreddits do a lot of unpaid work
nobody has explained to me. It isn't something a university would teach
either. That became the course.

That gave me a topic, not a course. There's endless material in it, which is
what Claude is good at, and I could see twelve weeks you could
shuffle without anyone noticing, so before letting it write anything
I put the premise down as one sentence at the top of `CLAUDE.md` and tested
pages against it ([`3ec9ab1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/3ec9ab1)). It mostly worked, though two pages got past it. The People index was just a grid and the 404
could have come from any course, and since the rule says rewrite not patch I
threw both out late ([`efbf960`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/efbf960)).

The bit I went back and forth on most was where the satire pointed. The
obvious target is the material, people arguing about railway station dates at
midnight, and I was happy with that for a while before it bothered me. But
students here contribute alongside those people for real, and I didn't think
I could ask that while making fun of them. What I gave Claude
instead was at the university, never at the volunteers — SlopU takes the work
extremely seriously, rostered Shifts and a Continuity of Service policy, while
burnout and moderator capture stay material not jokes. I think that
rule did more than anything else I wrote.

Going with real projects rather than made-up ones settled a lot of the rest. Once students are editing live articles the policies page can't
really be boilerplate, so the undertaking is four clauses and week 1 is admin
with no editing in it ([`b7f4a3d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/b7f4a3d)). I put it into `spec/`
because I wasn't confident I'd still treat it as important by week 9.

I also ran my own style rules over the built HTML. The first thing they
flagged was a problem with the rule, not the writing: "leverage" is the
right noun for what a volunteer withholding labour has, and week 10 leans on
it, so I narrowed the ban to the verb
([`c96f4f1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/c96f4f1)). The rule I'm least sure about is specifics
or nothing. It's probably why the course reads like someone who has done this work wrote
it, but a vague sentence can't be wrong and a specific one can, so late on I
checked every real-world claim against a source. Nine
weren't true, including the ratio the course opens on: thirty thousand is
Wikipedia's five-edit threshold, not its hundred-edit one, and I'd built a
slide on it ([`3237916`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-evealitaylor/commit/3237916)). Claude seems to write plausible specifics
as easily as true ones, which I hadn't thought about.

What I left out is coherence. I can check twelve weeks exist, that each says
what leaves the room, that assessment adds to 100 — but I don't know how you'd
test whether the arc holds, so I didn't write something pretending to. That's
probably the crit's job.
