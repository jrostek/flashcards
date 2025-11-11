import { Pressable, StyleSheet } from "react-native";

import { FlashCard } from "@/components/flashcard/flashcard";
import Animated from "react-native-reanimated";
import { flashcards } from "@/temp/mock-data";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function Study() {
  const [currentFlashcard, setCurrentFlashcard] = useState(0);

  const { question, answer, description } = flashcards[currentFlashcard];

  const goToNextCard = () => {
    const nextIndex = currentFlashcard + 1;
    if (nextIndex >= flashcards.length) {
      setCurrentFlashcard(0);
    } else {
      setCurrentFlashcard(nextIndex);
    }
  }

  const handleAccept = () => {
    goToNextCard();
  };
  const handleReject = () => {
    goToNextCard();
  };

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
      <Animated.View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, styles.rejectButton]}
          onPress={handleReject}
        >
          <Animated.Text style={styles.buttonText}>Reject</Animated.Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.acceptButton]}
          onPress={handleAccept}
        >
          <Animated.Text style={styles.buttonText}>Accept</Animated.Text>
        </Pressable>
      </Animated.View>
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
  },
  buttonContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: 300,
    marginTop: 30,
  },
  button: {
    width: 80,
    padding: 10,
    borderRadius: 25
  },
  acceptButton: {
    backgroundColor: "lightgreen",
  },
  rejectButton: {
    backgroundColor: "lightcoral",
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
