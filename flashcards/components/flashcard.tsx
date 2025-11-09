import Animated from "react-native-reanimated";

export const FlashCard = () => {
    return <Animated.View style={{ width: 300, height: 200, backgroundColor: 'lightpink', alignItems: 'center', justifyContent: 'center' }}>
        <Animated.Text>Flash Card</Animated.Text>
    </Animated.View>;
}