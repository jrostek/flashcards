import { Pressable, StyleSheet } from "react-native";

import { FlashCard } from "@/components/flashcard/flashcard";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { flashcards } from "@/temp/mock-data";
import { SafeAreaView } from "react-native-safe-area-context";
import { ModalComponent } from "@/components/modal";

export default function Study() {
  const [modalVisible, setModalVisible] = useState(false);
  const [flashcardsToStudy, setFlashcardsToStudy] = useState(flashcards);

  const goToNextCard = () => {
    const leftToStudy = flashcardsToStudy.slice(0, -1);
    setFlashcardsToStudy(leftToStudy);
  };

  const handleAccept = () => {
    translateX.value = withSpring(translateX.value + 50);
    goToNextCard();
  };
  const handleReject = () => {
    translateX.value = withSpring(translateX.value - 50);
    goToNextCard();
  };
  const handleReset = () => {
    setFlashcardsToStudy(flashcards);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      {
        //FIXME lots of warning from reanimated
      }
      <Animated.View style={styles.buttonContainer}>
        {flashcardsToStudy.map((value, index) => {
          console.log("Rendering card", index, value.question);
          return (
          <Animated.View
            style={[styles.cardInStack, {marginBottom: index * 30, marginRight: index * 10}]}
            key={value.id}
          >
            <FlashCard flashcard={value} index={index}/>
          </Animated.View>
        )})}
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
