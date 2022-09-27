
type Mods = Record<string, boolean | string>

export function cn(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object
      .entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([classname]) => classname)
  ]
    .join(' ')
    .trim()
}
