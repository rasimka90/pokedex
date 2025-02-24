import { TextStyle } from "react-native";

type CustomTextStyle = TextStyle & {
  fontFamily:
    | "poppins-regular"
    | "poppins-medium"
    | "poppins-semibold"
    | "poppins-bold";
};

type TextVariants = {
  heading24: CustomTextStyle;
  bodyBody3: CustomTextStyle;
  bodyCaption: CustomTextStyle;
  headerSubtitle2: CustomTextStyle;
  headerSubtitle3: CustomTextStyle;
  headerSubtitle1: CustomTextStyle;
};

export const textVariants: TextVariants = {
  heading24: {
    fontSize: 24,
    fontFamily: "poppins-bold",
    lineHeight: 32,
    color: "#fff",
  },

  headerSubtitle1: {
    fontSize: 14,
    fontFamily: "poppins-bold",
    lineHeight: 16,
    color: "#fff",
  },

  headerSubtitle2: {
    fontSize: 12,
    fontFamily: "poppins-bold",
    lineHeight: 16,
    color: "#fff",
  },
  headerSubtitle3: {
    fontSize: 10,
    fontFamily: "poppins-bold",
    lineHeight: 16,
    color: "#fff",
  },
  bodyBody3: {
    fontSize: 10,
    fontFamily: "poppins-regular",
    lineHeight: 16,
    color: "#fff",
  },
  bodyCaption: {
    fontSize: 8,
    fontFamily: "poppins-regular",
    lineHeight: 12,
    color: "#fff",
  },
};
