import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Provider } from "react-redux";
import { Navigator } from "./Navigator";
import { Colors } from "./constants/Colors";
import { store } from "./states/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <StatusBar style="light" backgroundColor={Colors.PRIMARY} />
          <Navigator />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
