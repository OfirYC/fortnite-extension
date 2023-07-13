export function isValidEpicSkincode(code: string) {
  return code.replaceAll("-", "").length == 20;
}
