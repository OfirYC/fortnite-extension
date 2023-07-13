import {
  makeFailedFetchError,
  makeInvalidKeyError,
} from "../../constants/errors.js";
import { isValidXboxSkincode } from "../skincode-validation/validate-xbox.js";

import { MD5 } from "crypto-js";

export async function fetchEpicSkincodeData(code: string) {
  if (!isValidXboxSkincode(code)) throw makeInvalidKeyError("Xbox");

  const auth = nsCCAuth(code);
  const url = `https://ws1.nitestats.com/codes/checker?auth=${auth}&code=${code}`;
  const response: {
    table: "valid" | "invalid";
    title: string;
    image: string;
  } = await fetch(url).then((res) => res.json());

  if (response?.table != "valid") throw makeFailedFetchError("Xbox");

  const returnData: {
    title: string;
    image?: string;
  } = {
    title: response.title,
  };

  const term = response.title
    .split(" ")
    .filter((_, i, me) => me.length - 1 !== i)
    .join(" ");

  const imageRes = await (
    await fetch(
      `https://fnbr.co/api/images?search=${encodeURIComponent(term)}`,
      {
        headers: {
          "x-api-key": "2b0cc97a-a68a-4f02-a49f-6aef830d7d1a",
        },
      }
    )
  ).json();

  if (imageRes?.data?.[0]?.images?.icon)
    returnData.image = imageRes?.data?.[0]?.images?.icon;

    

  return returnData;
}

function hex2text(str1: string) {
  var hex = str1.toString();
  var str = "";
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}
export function nsCCAuth(data: string) {
  return MD5(
    hex2text("4e697465537461747341757468") + "v1.3:" + data
  ).toString();
}
