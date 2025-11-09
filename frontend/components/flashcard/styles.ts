import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  frontCard: {
    backgroundColor: "lightpink",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 200,
    padding: 10,
  },
  backCard: {
    backgroundColor: "lightyellow",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 200,
    padding: 10,
  },
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  description: {
    fontSize: 14,
  },
  flipCard: {
    backfaceVisibility: "hidden",
  },
});

export const flipCardStyles = StyleSheet.create({
  regularCard: {
    position: "absolute",
    zIndex: 1,
  },
  flippedCard: {
    zIndex: 2,
  },
});
