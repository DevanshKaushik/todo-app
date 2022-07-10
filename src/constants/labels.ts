import { colors } from "./styles"

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
  RED: colors.light.redColor,
  ORANGE: colors.light.orangeColor,
  GREEN: colors.light.greenColor,
  YELLOW: colors.light.yellowColor,
  PINK: colors.light.pinkColor,
  GREY: colors.light.greyColor,
  CYAN: colors.light.cyanColor,
  PURPLE: colors.light.purpleColor,
}
