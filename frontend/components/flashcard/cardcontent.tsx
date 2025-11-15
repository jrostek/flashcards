import Animated, { interpolate, SharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { flipCardStyles, styles } from "./styles";
import { Front } from "./front";
import { Back } from "./back";
import { Flashcard } from "@/constants/types";

type FlipCardProps = {
  showAnswer: SharedValue<boolean>;
  flashcard: Flashcard;
  index: number;
};

export const CardContent = ({
  showAnswer,
  flashcard,
  index,
}: FlipCardProps) => {
const duration = 500;
  const regularCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(showAnswer.value), [0, 1], [0, 180]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        { rotateY: rotateValue },
      ],
    };
  });

  const flippedCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(showAnswer.value), [0, 1], [180, 360]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        { rotateY: rotateValue },
      ],
    };
  });

  return (
    <Animated.View>
      <Animated.View
        style={[
          flipCardStyles.regularCard,
          styles.flipCard,
          regularCardAnimatedStyle,
        ]}
      >
        <Front question={flashcard.question} index={index} />
      </Animated.View>
      <Animated.View
        style={[
          flipCardStyles.flippedCard,
          styles.flipCard,
          flippedCardAnimatedStyle,
        ]}
      >
        <Back answer={flashcard.answer} description={flashcard.description} />
      </Animated.View>
    </Animated.View>
  );
};