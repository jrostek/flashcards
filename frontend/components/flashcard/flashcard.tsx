import { Pressable } from "react-native";
import {
  useSharedValue,
} from "react-native-reanimated";
import { CardContent } from "./cardcontent";
import { Flashcard } from "@/constants/types";

export const FlashCard = ({
  flashcard,
  index
}: {
  flashcard: Flashcard,
  index: number
}) => {
  const showAnswer = useSharedValue(false);

  const handlePress = () => {
    showAnswer.value = !showAnswer.value;
  };

  return (
    <Pressable onPress={handlePress} style={{ backgroundColor: "white" }}>
      <CardContent
        showAnswer={showAnswer}
        flashcard={flashcard}
        index={index}
      />
    </Pressable>
  );
};


