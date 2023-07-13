import { validXboxChars } from "../../constants/codes.js";

export function isValidXboxSkincode(code: string): boolean {
  const arr = code.replaceAll("-", "").split("");
  return (
    arr.length == 25 && arr.every((value) => validXboxChars.includes(value))
  );
}
