import { Entypo } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Container } from "../components/Container";
import { Colors } from "../constants/Colors";

export const Notify = ({ text, hide }) => {
  return (
    <TouchableOpacity onPress={hide}>
      <Container
        width={200}
        height={60}
        radius={20}
        color={Colors.COLORGUL_SECONDARY}
      >
        <View
          style={{
            paddingLeft: 10,
            flexDirection: "row",
            width: "100%",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Entypo name="new" size={35} color={Colors.PRIMARY} />
          <Text style={{ fontSize: 17, fontWeight: "bold", marginLeft: 5 }}>
            {text}
          </Text>
        </View>
      </Container>
    </TouchableOpacity>
  );
};
