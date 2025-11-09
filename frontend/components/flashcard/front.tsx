import Animated from "react-native-reanimated";
import { styles } from "./styles";


export const Front = ({ question }: { question: string }) => {
  return (
    <Animated.View style={styles.frontCard}>
      <Animated.Text style={styles.mainText}>{question}</Animated.Text>
    </Animated.View>
  );
};