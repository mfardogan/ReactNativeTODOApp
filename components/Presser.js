import { Entypo } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Container } from "./Container";

export const Presser = ({
  color,
  icon = "flash",
  text,
  width = 125,
  height = 45,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress}>
    <Container color={color} width={width} height={height} radius={25}>
      <View
        style={{
          height: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Entypo name={icon} size={24} color="white" />
        <Text style={{ color: "white" }}>{text}</Text>
      </View>
    </Container>
  </TouchableOpacity>
);
