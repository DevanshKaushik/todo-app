import {
  lightCyanColor,
  lightGreenColor,
  lightGreyColor,
  lightOrangeColor,
  lightPinkColor,
  lightPurpleColor,
  lightRedColor,
  lightYellowColor,
} from "./styles"

export enum LabelIds {
  RED = "RED",
  ORANGE = "ORANGE",
  GREEN = "GREEN",
  YELLOW = "YELLOW",
  PINK = "PINK",
  GREY = "GREY",
  CYAN = "CYAN",
  PURPLE = "PURPLE",
}

export const LabelColors: { [k in LabelIds as string]: string } = {
  RED: lightRedColor,
  ORANGE: lightOrangeColor,
  GREEN: lightGreenColor,
  YELLOW: lightYellowColor,
  PINK: lightPinkColor,
  GREY: lightGreyColor,
  CYAN: lightCyanColor,
  PURPLE: lightPurpleColor,
}
