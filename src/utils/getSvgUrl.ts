export function getSvgUrl(name: string) {
  return new URL(`./sprite.svg`, import.meta.url).href + `#${name}`;
}
