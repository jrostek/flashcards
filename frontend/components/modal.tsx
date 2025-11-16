import { Modal, Pressable, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

export const ModalComponent = ({
  visible,
  setModalVisible,
}: {
  visible: boolean;
  setModalVisible: (visible: boolean) => void;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setModalVisible(!visible);
      }}
    >
      <Animated.View style={styles.centeredView}>
        <Animated.View style={styles.modalView}>
          <Animated.Text style={[styles.textStyle, styles.modalTitle]}>Congrats!</Animated.Text>
          <Animated.Text style={styles.modalText}>You have finished studying all cards. Keep practicing or get some fresh air.</Animated.Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!visible)}
          >
            <Animated.Text style={styles.textStyle}>Ok</Animated.Text>
          </Pressable>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    padding: 10,
    borderRadius: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: "lightgreen",
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitle: {
    fontSize: 25,
    marginBottom: 20,
  },
  modalText: {
    marginBottom: 40,
    textAlign: "center",
  },
});
