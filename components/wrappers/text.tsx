import { forwardRef } from "react";
import { TextSkeleton } from "./skeleton";
import { TextProps, Selection } from "./types";
/**
 * @notice
 * Wrapper image component,
 * for ease of use with skeletons and global styling
 */

("text-[1px]");
("text-[2px]");
("text-[3px]");
("text-[4px]");
("text-[5px]");
("text-[6px]");
("text-[7px]");
("text-[8px]");
("text-[9px]");
("text-[10px]");
("text-[11px]");
("text-[12px]");
("text-[13px]");
("text-[14px]");
("text-[15px]");
("text-[14px]");
("text-[16px]");
("text-[15px]");
("text-[17px]");
("text-[18px]");
("text-[19px]");
("text-[20px]");
("text-[21px]");
("text-[22px]");
("text-[23px]");
("text-[24px]");
("text-[25px]");
("text-[26px]");
("text-[27px]");
("text-[28px]");
("text-[29px]");
("text-[30px]");
("text-[31px]");
("text-[32px]");
("text-[33px]");
("text-[34px]");
("text-[35px]");
("text-[36px]");
("text-[37px]");
("text-[38px]");
("text-[39px]");
("text-[40px]");
("text-[41px]");
("text-[42px]");
("text-[43px]");
("text-[44px]");
("text-[45px]");
("text-[46px]");
("text-[38px]");
("text-[38px]");
("text-[38px]");
("text-[38px]");
("text-[38px]");
("text-[38px]");
("text-[38px]");
("text-[38px]");
("text-[22px]");
("text-opacity-30");
("text-[22px]");
("text-[22px]");
("text-[22px]");
("text-[22px]");
("text-[22px]");
("text-[22px]");
("text-[22px]");
("text-[32px]");
("text-[42px]");
("text-[52px]");
("text-[62px]");
("text-[72px]");

("font-bold");
("font-black");
("font-bold");

const WrappedText = forwardRef<HTMLDivElement, TextProps>(
  (
    {
      children,
      fontSize = 14,
      fontStyle = "reguler",
      fontFamily = "rubik",
      fontColor,
      onClick,
      select = Selection.allow,
      truncate = "",
      contentEditable = "false",
      className = "",
      id,
      style,
      onInput,
      ...props
    }: TextProps,
    ref
  ) => {
    if (children === undefined) {
      return (
        <TextSkeleton
          fontSize={fontSize}
          className={className}
        />
      );
    }

    return (
      <div
        ref={ref}
        className={`${
          "text-" +
          `[${fontSize.toString()}px]` +
          " font-" +
          fontFamily +
          " font-" +
          fontStyle +
          " text-" +
          (fontColor || "custom-textColor") +
          " " +
          "select-none focus:outline-none whitespace-nowrap " +
          truncate +
          " " +
          className
        }`}
        onClick={(e: React.MouseEvent<HTMLElement>) =>
          onClick ? onClick(e) : null
        }
        contentEditable={contentEditable}
        suppressContentEditableWarning
        id={id}
        onInput={(e) => onInput && onInput(e)}
        style={style || {}}
        {...props}
      >
        {children}
      </div>
    );
  }
);

WrappedText.displayName = "WrappedText";

export default WrappedText;
