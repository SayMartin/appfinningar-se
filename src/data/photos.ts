import type { Lang } from '../i18n/ui';

/**
 * Alt-texter per filnamn. Nyckeln är filnamnet exakt som det ligger i
 * src/assets/photos/.
 *
 * Alt-text är inte valfritt pynt: utan den är bilden helt osynlig för den som
 * använder skärmläsare, och osynlig för Google. Beskriv vad som syns, inte att
 * det är ett foto — "Dimma över Vättern i gryningen", inte "Bild 1".
 */
export const captions: Record<string, Record<Lang, string>> = {
  // 'vattern-gryning.jpg': {
  //   sv: 'Dimma över Vättern i gryningen',
  //   en: 'Mist over Lake Vättern at dawn',
  // },
};

/** Filnamn utan ändelse, som nödlösning när alt-text saknas. */
export function fallbackAlt(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .trim();
}
