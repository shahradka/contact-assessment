import { FC, HtmlHTMLAttributes, createElement, ReactNode } from "react";
import classnames from "classnames";
import { useMediaQueries } from "../../../hooks/useMediaQueries";

import "./styles.scss";
import React from "react";

interface IText extends HtmlHTMLAttributes<HTMLSpanElement> {
  variant?:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "normal"
    | "small";
  weight?: "medium" | "bold";
  color?: "primary" | "contrast" | "gray";
  componentType?: keyof JSX.IntrinsicElements;
  decorating?: "simple" | "underlined" | "link";
  children?: string;
}

const CustomComponent: FC<
  Omit<IText, "children"> & { children?: ReactNode }
> = ({ variant, children, className, componentType = 'span', ...restProps }) => {
  return variant === "heading1" ||
    variant === "heading2" ||
    variant === "heading3" ||
    variant === "heading4"
    ? createElement(
        (variant === "heading1" && "h1") ||
          ("heading2" && "h2") ||
          ("heading2" && "h3") ||
          ("heading3" && "h4"),
        { className, ...restProps },
        children,
      )
    : createElement(componentType, { className, ...restProps }, children);
};

const Text: FC<IText> = ({
  variant = "normal",
  weight = "medium",
  children,
  className,
  componentType = "span",
  color = "primary",
  ...restProps
}) => {
  const { mobile, tablet } = useMediaQueries();
  console.log("tablet", tablet);
  console.log("variant", variant)
  const renderTitle = (
    <CustomComponent
      variant={variant}
      componentType={componentType}
      className={classnames([
        'text',
          tablet
            ? (`${variant}-lg`)
            : mobile
              ? (`${variant}-sm`)
              : '',
        weight,
        color,
        className,
      ])}
      {...restProps}
    >
      {children}
    </CustomComponent>
  );

  return renderTitle;
};

export default Text;
