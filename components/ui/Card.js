import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: deviceWidth < 380 ? 82 : 100,
    marginHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    //android only property to add shadow
    elevation: 4,
    //Displaying shadow on iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
});
