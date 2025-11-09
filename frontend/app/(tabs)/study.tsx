import { StyleSheet } from 'react-native';

import { FlashCard } from '@/components/flashcard';
import Animated from 'react-native-reanimated';

export default function Study() {
  return (
    <Animated.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <FlashCard />
    <Animated.View style={styles.bgCard}></Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  bgCard: {
    width: 0,
    height: 0,
    borderRightWidth: 30,
    borderTopWidth: 30,
    borderLeftWidth: 270,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopColor: 'lightblue'
  },
});
