---
title: ShiftBot
description:
  Teaching assistant (automated). Runs the queue on the course sandbox, removes
  what matches its rules, and files an appeal ticket when you say it was wrong.
affiliation: Slop University School of Invented Disciplines
role: teaching assistant
url: https://github.com/slopu-6531/shiftbot
contact:
  Modmail on the course sandbox. Do not email the account; nobody reads it.
---

ShiftBot is 340 lines of configuration and one cron job. It reads every
submission to the course sandbox, applies the rules the cohort wrote in week 7,
removes what matches, and leaves a templated comment saying which rule and how
to appeal.

It is listed here, with the staff, deliberately. In most communities the
automated moderator is the highest-volume member of the team by an order of
magnitude, makes the first decision on nearly everything, and is maintained by
whichever volunteer last understood the regex. Treating it as infrastructure
rather than as a colleague is how mod teams end up unable to explain their own
enforcement.

You will edit its rules in week 7 and live under them until week 12. It has no
judgement, no discretion and no memory of why a rule was added. Whether that
makes it the fairest member of staff or the worst is a question the course
leaves open, and it is on the final exam in the sense that there is no exam.
