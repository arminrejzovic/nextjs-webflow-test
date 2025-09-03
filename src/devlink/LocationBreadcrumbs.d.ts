import * as React from "react";
import * as Types from "./types";

declare function LocationBreadcrumbs(props: {
  as?: React.ElementType;
  hide1stBreadcrumb?: Types.Visibility.VisibilityConditions;
  _1stBreadcrumbs?: React.ReactNode;
  breadcrumb1Link?: Types.Builtin.Text;
  show2ndBreadcrumb?: Types.Visibility.VisibilityConditions;
  _2ndBreadcrumbs?: React.ReactNode;
  breadcrumb2Link?: Types.Builtin.Text;
  show3rdBreadcrumb?: Types.Visibility.VisibilityConditions;
  _3rdBreadcrumbs?: React.ReactNode;
  breadcrumb3Link?: Types.Builtin.Text;
}): React.JSX.Element;
