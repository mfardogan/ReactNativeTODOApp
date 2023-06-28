import { View } from "react-native";

export const Container = (props) => {
  const { width, height, color, radius } = props;
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: color,
        borderRadius: radius,
        margin: 5,
        padding: 5,
      }}
    >
      {props.children}
    </View>
  );
};
