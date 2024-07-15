export function adjustColor(hex: string, percentage: number, mode: 'darker' | 'brighter'): string {
  // Ensure the hex input is valid
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    throw new Error('Invalid HEX color.')
  }

  // Convert hex to RGB
  let r = 0,
    g = 0,
    b = 0
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16)
    g = parseInt(hex[2] + hex[2], 16)
    b = parseInt(hex[3] + hex[3], 16)
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16)
    g = parseInt(hex[3] + hex[4], 16)
    b = parseInt(hex[5] + hex[6], 16)
  }

  // Calculate the adjustment factor
  const adjustment = mode === 'brighter' ? 1 + percentage / 100 : 1 - percentage / 100

  // Adjust the RGB values
  r = Math.min(255, Math.max(0, Math.round(r * adjustment)))
  g = Math.min(255, Math.max(0, Math.round(g * adjustment)))
  b = Math.min(255, Math.max(0, Math.round(b * adjustment)))

  // Convert RGB back to hex
  const toHex = (n: number) => n.toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
