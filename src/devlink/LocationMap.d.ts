import * as React from "react";
import * as Types from "./types";

declare function LocationMap(props: {
  as?: React.ElementType;
  day1?: React.ReactNode;
  day1Hours?: React.ReactNode;
  day2?: React.ReactNode;
  day2Hours?: React.ReactNode;
  day3?: React.ReactNode;
  day3Hours?: React.ReactNode;
  day4?: React.ReactNode;
  day4Hours?: React.ReactNode;
  day5?: React.ReactNode;
  day5Hours?: React.ReactNode;
  day6?: React.ReactNode;
  day6Hours?: React.ReactNode;
  day7?: React.ReactNode;
  day7Hours?: React.ReactNode;
  directionButtonProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
