import Animated from "react-native-reanimated";

export const OverviewCard = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <Animated.View style={styles.overviewCard}>
      <Animated.Text style={styles.question}>{question}</Animated.Text>
      <Animated.Text style={styles.answer}>{answer}</Animated.Text>
    </Animated.View>
  );
};

const styles = {
  overviewCard: {
    backgroundColor: "lightblue",
    padding: 20,
    alignItems: "center" as const,
    justifyContent: "space-between" as const,
    marginVertical: 10,
    flexDirection: "row" as const,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold" as const,
    marginVertical: 10,
  },
  answer: {
    fontSize: 18,
    marginVertical: 10,
  },
};
