import { Pressable } from "react-native";
import {
  useSharedValue,
} from "react-native-reanimated";
import { CardContent } from "./cardcontent";

export const FlashCard = ({
  question,
  answer,
  description,
}: {
  question: string;
  answer: string;
  description: string;
}) => {
  const showAnswer = useSharedValue(false);

  const handlePress = () => {
    showAnswer.value = !showAnswer.value;
  };

  return (
    <Pressable onPress={handlePress} style={{ backgroundColor: "white" }}>
      <CardContent
        showAnswer={showAnswer}
        question={question}
        answer={answer}
        description={description}
      />
    </Pressable>
  );
};


