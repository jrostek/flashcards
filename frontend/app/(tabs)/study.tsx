import { StyleSheet } from "react-native";

import { FlashCard } from "@/components/flashcard/flashcard";
import Animated from "react-native-reanimated";
import { flashcards } from "@/temp/mock-data";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Study() {
  const { question, answer, description } = flashcards[0];
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <FlashCard
        question={question}
        answer={answer}
        description={description}
      />
      <Animated.View style={styles.bottomCards}></Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomCards: {
    width: 0,
    height: 0,
    borderRightWidth: 30,
    borderTopWidth: 30,
    borderLeftWidth: 270,
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    borderTopColor: "lightblue",
  }
});
