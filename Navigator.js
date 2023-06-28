import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "./constants/Colors";
import { Create } from "./screens/Create";
import { Examine } from "./screens/Examine";
import { Home } from "./screens/Home";

const Stack = createStackNavigator();

const Logo = () => {
  return (
    <TouchableOpacity>
      <View
        style={{
          marginTop: 10,
          marginLeft: 10,
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: "#e0ccff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: "#a366ff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: Colors.COLORFUL_PRIMARY,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              TO
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "Todo app.",
          headerShadowVisible: false,
          animationEnabled: false,
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 25,
            color: "white",
          },

          headerStyle: {
            backgroundColor: Colors.PRIMARY,
          },
          headerLeft: () => <Logo />,
        }}
      />
      <Stack.Screen
        name="create"
        component={Create}
        options={{
          title: "Create",
          headerShadowVisible: false,
          animationEnabled: false,
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 25,
            color: "white",
          },
          headerStyle: {
            backgroundColor: Colors.PRIMARY,
          },
        }}
      />
      <Stack.Screen
        name="examine"
        component={Examine}
        options={{
          title: "Examine",
          headerShadowVisible: false,
          animationEnabled: false,
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 25,
            color: "white",
          },
          headerStyle: {
            backgroundColor: Colors.PRIMARY,
          },
        }}
      />
    </Stack.Navigator>
  );
};
