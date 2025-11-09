import Animated, { interpolate, SharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { flipCardStyles, styles } from "./styles";
import { Front } from "./front";
import { Back } from "./back";

type FlipCardProps = {
  showAnswer: SharedValue<boolean>;
  question: string;
  answer: string;
  description: string;
};

export const CardContent = ({
  showAnswer,
  question,
  answer,
  description
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
        <Front question={question} />
      </Animated.View>
      <Animated.View
        style={[
          flipCardStyles.flippedCard,
          styles.flipCard,
          flippedCardAnimatedStyle,
        ]}
      >
        <Back answer={answer} description={description} />
      </Animated.View>
    </Animated.View>
  );
};