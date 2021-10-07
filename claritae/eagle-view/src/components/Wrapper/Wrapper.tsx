import React, { ReactNode } from "react";
import { Typography as TypographyBase, useTheme } from "@material-ui/core";
import {
  getColor,
  getFontSize,
  getFontWeight,
} from "../../utils/getProperties";

interface Props {
  children: ReactNode;
  weight: "light" | "medium" | "bold";
  size: "sm" | "md" | "xl" | "xxl";
  colorBrightness?: string;
  color?: string;
  variant?: string;
  className?: string;
}
export const Typography = ({
  weight,
  size,
  colorBrightness,
  color,
  variant,
  children,
  className,
}: Props) => {
  const theme = useTheme();

  return (
    <TypographyBase
      style={{
        color: getColor(color, theme, colorBrightness),
        fontWeight: getFontWeight(weight),
        fontSize: getFontSize(size, variant, theme),
      }}
      className={className}
    >
      {children}
    </TypographyBase>
  );
};
