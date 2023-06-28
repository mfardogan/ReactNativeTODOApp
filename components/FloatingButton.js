import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
export const FloatingButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: Colors.COLORFUL_PRIMARY,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Entypo name={props.icon} size={30} color="white" />
      </View>
    </TouchableOpacity>
  );
};
