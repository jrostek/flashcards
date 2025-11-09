import Animated from "react-native-reanimated";
import { styles } from "./styles";


export const Back = ({
  answer,
  description,
}: {
  answer: string;
  description: string;
}) => {
  return (
    <Animated.View style={styles.backCard}>
      <Animated.Text style={styles.mainText}>{answer}</Animated.Text>
      <Animated.Text style={styles.description}>{description}</Animated.Text>
    </Animated.View>
  );
};