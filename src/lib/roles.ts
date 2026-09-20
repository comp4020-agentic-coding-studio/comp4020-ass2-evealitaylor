// How a person's `role:` is shown to a reader. The schema takes a free
// string, so two components rendering it separately is how the People index
// and a Shift page start disagreeing about what Prue is called.
//
// ShiftBot sorts last. It is listed with the staff on purpose — in most
// communities the automated moderator makes the first decision on nearly
// everything — but it is still the one that goes at the end of the list.
const ORDER: Record<string, number> = {
  convenor: 0,
  tutor: 1,
  guest: 2,
  "teaching assistant": 3,
  other: 4,
};

const LABELS: Record<string, string> = {
  convenor: "Convenor",
  tutor: "Tutor",
  guest: "Guest lecturer",
  "teaching assistant": "Teaching assistant",
  other: "",
};

/** The display label for a role, or the role itself if it is one we have no
 *  label for — better an unstyled true word than a silently missing one. */
export function roleLabel(role: string | undefined): string {
  if (!role) return "";
  const known = LABELS[role];
  return known === undefined ? role : known;
}

export function roleRank(role: string | undefined): number {
  return ORDER[role ?? "other"] ?? 99;
}
