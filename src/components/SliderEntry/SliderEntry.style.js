import { StyleSheet, Dimensions, Platform } from "react-native";
import { colors } from "../../styles/index.style";

const IS_IOS = Platform.OS === "ios";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18, // needed for shadow
  },
  shadow: {
    position: "absolute",
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    //shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    borderRadius: entryBorderRadius,
  },
  imageContainer: {
    backgroundColor: "#F3F3F3",
    height: slideHeight,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    //zIndex: 100,
    //opacity: 0.7,
    borderRadius: 8,

    //borderRadius : entryBorderRadius,
    /*borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
        borderBottomLeftRadius : entryBorderRadius,
        borderBottomRightRadius : entryBorderRadius*/
  },
  imageContainerEven: {},
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    //borderTopLeftRadius: entryBorderRadius,
    //borderTopRightRadius: entryBorderRadius,
    //borderBottomLeftRadius : entryBorderRadius,
    //borderBottomRightRadius : entryBorderRadius
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
  },
  radiusMaskEven: {},
  textContainer: {
    justifyContent: "center",
    paddingHorizontal: 16,
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius,
  },
  textContainerEven: {
    //backgroundColor: colors.black
  },
  title: {
    color: colors.black,
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  titleEven: {
    color: "white",
  },
  subtitle: {
    marginTop: 6,
    color: colors.gray,
    fontSize: 12,
    fontStyle: "italic",
  },
  subtitleEven: {
    color: "rgba(255, 255, 255, 0.7)",
  },
});
