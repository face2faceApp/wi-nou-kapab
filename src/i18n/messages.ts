import fr from "../../messages/fr.json";
import en from "../../messages/en.json";
import type { Locale } from "./routing";

const catalogs = { fr, en } as const;

export type Messages = typeof fr;

export function getMessages(locale: Locale): Messages {
  return catalogs[locale];
}

export function t(
  messages: Messages,
  path: string
): string {
  const parts = path.split(".");
  let cur: unknown = messages;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in cur) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return path;
    }
  }
  return typeof cur === "string" ? cur : path;
}
