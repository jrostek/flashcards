import { Pressable, StyleSheet } from "react-native";

import { FlashCard } from "@/components/flashcard/flashcard";
import Animated, {
  RollOutLeft,
  RollOutRight,
  useSharedValue,
} from "react-native-reanimated";
import { flashcards } from "@/temp/mock-data";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { ModalComponent } from "@/components/modal";

export default function Study() {
  const cardsToStudy = flashcards.slice();
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const rollOutLeftAnimation = new RollOutLeft().build();
  const rollOutRightAnimation = new RollOutRight().build();
  const exitDirection = useSharedValue("left");

  const cardsToRender = cardsToStudy.slice(currentCardIdx, currentCardIdx + 3);

  const goToNextCard = () => {
    const nextIdx = currentCardIdx + 1;
    if (nextIdx >= flashcards.length) {
      setCurrentCardIdx(0);
      setModalVisible(true);
    } else {
      setCurrentCardIdx(nextIdx);
    }
  };

  const CustomExitingAnimation = (values: any) => {
    "worklet";

    return exitDirection.value === "left"
      ? rollOutLeftAnimation(values)
      : rollOutRightAnimation(values);
  };

  const handleAccept = () => {
    exitDirection.value = "right";
    goToNextCard();
  };
  const handleReject = () => {
    exitDirection.value = "left";
    goToNextCard();
  };

  const handleReset = () => {
    setCurrentCardIdx(0);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Animated.View style={styles.buttonContainer}>
        {cardsToRender.reverse().map((value, index) => {
          return (
            <Animated.View
              style={[
                styles.cardInStack,
                { marginBottom: index * 30, marginRight: index * 10 },
              ]}
              exiting={CustomExitingAnimation}
              key={value.id}
            >
              <FlashCard flashcard={value} index={index} />
            </Animated.View>
          );
        })}
      </Animated.View>
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
        <Pressable
          style={[styles.button, styles.resetButton]}
          onPress={handleReset}
        >
          <Animated.Text style={styles.buttonText}>Reset</Animated.Text>
        </Pressable>
      </Animated.View>
      <ModalComponent visible={modalVisible} setModalVisible={setModalVisible} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: 300,
    marginTop: 120,
  },
  button: {
    width: 80,
    padding: 10,
    borderRadius: 25,
  },
  acceptButton: {
    backgroundColor: "lightgreen",
  },
  rejectButton: {
    backgroundColor: "lightcoral",
  },
  resetButton: {
    backgroundColor: "lightblue",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  cardInStack: {
    position: "absolute",
  },
});
