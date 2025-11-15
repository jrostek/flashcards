import Animated from "react-native-reanimated";
import { styles } from "./styles";


export const Front = ({ question, index }: { question: string, index: number }) => {
  return (
    <Animated.View style={[styles.frontCard, {backgroundColor: `rgb(255,255,${index * 130})`}]}>
      <Animated.Text style={styles.mainText}>{question}</Animated.Text>
    </Animated.View>
  );
};