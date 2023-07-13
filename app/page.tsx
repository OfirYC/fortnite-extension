"use client";
import { SkincodeInput } from "../components/skincode-input";
import WrappedText from "../components/wrappers/text";

export default function Extension() {
  return (
    <div
      className="h-[500px] w-[200px] bg-red-500"
      style={{
        height: "2000px",
        width: "500px",
        backgroundColor: "red",
      }}
    >
      <div className="flex flex-col items-center text-center">
        <WrappedText fontSize={32} fontStyle="bold">
          ברוך הבא!
        </WrappedText>
        <WrappedText fontSize={14} className="text-opacity-80">
          לחנות הפורטנייט הרשמית של ישראל!
        </WrappedText>
        <WrappedText fontSize={14} className="text-opacity-80">
          פה תוכל לממש את הרכישות שלך לכל הפלטפורומות בקלות
        </WrappedText>
      </div>

      <div className="flex flex-col items-center">
        <WrappedText fontStyle="bold" fontSize={24}>
          הכנס את הקוד שקיבלת כן כדי לממש אותו
        </WrappedText>
        <SkincodeInput onClick={() => alert("Click")} />
      </div>

      <WrappedText>Hello Fortnite World</WrappedText>
    </div>
  );
}
