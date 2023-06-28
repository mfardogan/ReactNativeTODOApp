import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { Container } from "../components/Container";
import { FloatingButton } from "../components/FloatingButton";
import { List } from "../components/List";
import { Colors } from "../constants/Colors";

export const Home = () => {
  const navigator = useNavigation();
  const todos = useSelector((state) => state.todos);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 25,
        alignItems: "center",
        backgroundColor: Colors.PRIMARY,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: 300,
          height: 150,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            flex: 4,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 55 }}>
            You have
          </Text>

          <Text style={{ fontWeight: "bold", color: "white", fontSize: 35 }}>
            tasks to do.
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            flex: 2,
            height: "100%",
          }}
        >
          <Text
            style={{
              color: Colors.COLORFUL_PRIMARY,
              fontWeight: "bold",
              fontSize: 140,
            }}
          >
            {todos.filter((e) => !e.complete).length}
          </Text>
        </View>
      </View>

      <Container
        width={350}
        height={50}
        color={Colors.COLORGUL_SECONDARY}
        radius={45}
      >
        <View
          style={{
            flex: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 4, height: "100%" }}>
            <TextInput
              style={{
                padding: 10,
                borderBottomColor: "white",
                color: "black",
                fontSize: 20,
              }}
              placeholder="Search"
            />
          </View>
          <View
            style={{
              paddingLeft: 150,
              flex: 1,
              height: "100%",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <TouchableOpacity>
              <Entypo
                name="hour-glass"
                size={24}
                color={Colors.COLORFUL_PRIMARY}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Container>

      <View
        style={{ margin: 10, justifyContent: "center", alignItems: "center" }}
      >
        <Text
          style={{
            color: Colors.COLORGUL_SECONDARY,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          You have done {todos.filter((e) => e.complete).length} todos so far.
        </Text>
      </View>
      <List />

      <View style={{ position: "absolute", bottom: 20, right: 20 }}>
        <FloatingButton
          icon={"fingerprint"}
          onPress={() => navigator.navigate("create")}
        />
      </View>
    </View>
  );
};
