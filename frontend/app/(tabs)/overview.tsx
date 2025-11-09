import { OverviewCard } from "@/components/overview-card";
import { flashcards } from "@/temp/mock-data";
import { StyleSheet } from "react-native";

import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Overview() {
  return (
    <SafeAreaView style={styles.container}>
        <Animated.FlatList
          data={flashcards}
          renderItem={({ item }) => (
            <OverviewCard question={item.question} answer={item.answer} />
          )}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
