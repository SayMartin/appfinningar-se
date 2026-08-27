import type { Lang } from '../i18n/ui';

/**
 * Alt text per filename. The key is the filename exactly as it appears in
 * src/assets/photos/.
 *
 * Alt text is not optional decoration: without it the image is entirely
 * invisible to anyone using a screen reader, and invisible to Google. Describe
 * what is in the picture, not that it is a photo — "Mist over Lake Vättern at
 * dawn", not "Image 1".
 */
export const captions: Record<string, Record<Lang, string>> = {
  // 'vattern-gryning.jpg': {
  //   sv: 'Dimma över Vättern i gryningen',
  //   en: 'Mist over Lake Vättern at dawn',
  // },
};

/** Filename without its extension, as a last resort when alt text is missing. */
export function fallbackAlt(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .trim();
}
