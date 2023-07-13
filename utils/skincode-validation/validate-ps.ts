export function isValidPsSkincode(code: string): boolean {
  return code.replaceAll("-", "").length == 12;
}
