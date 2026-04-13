import { clsx, type ClassValue } from "clsx"
import { format, intervalToDuration, isThisMonth, addMonths } from "date-fns";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatExperienceRange(startDate: Date, endDate: Date) {
  const start = format(startDate, "MMM yyyy"); // "Oct 2023" [web:6]
  const end =
    !endDate || isThisMonth(endDate) ? "Now" : format(endDate, "MMM yyyy"); // [web:6]
  return `${start} - ${end}`;
}

export function formatYrsMos(startDate: Date, endDate = new Date()) {
  const { years = 0, months = 0 } = intervalToDuration({
    start: startDate,
    end: addMonths(endDate, 1),
  }); // { years, months, ... } [web:47]

  const parts = [];
  if (years) parts.push(`${years} yr${years === 1 ? "" : "s"}`);
  if (months) parts.push(`${months} mo${months === 1 ? "" : "s"}`);

  return parts.length ? parts.join(" ") : "0 mos";
}
