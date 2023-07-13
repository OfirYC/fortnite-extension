import { CSSProperties, MouseEvent } from "react";

export interface BaseComponentProps {
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e?: MouseEvent<HTMLElement | HTMLDivElement, globalThis.MouseEvent>) => any;
  href?: string;
}
