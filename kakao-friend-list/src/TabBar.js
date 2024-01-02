import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";

const IconContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px 0 0 0;
`;

const TabButton = ({ nameOn, nameOff, isSelected, onPress }) => {
  return (
    <IconContainer onPress={onPress}>
      <Ionicons name={isSelected ? nameOn : nameOff} size={24} color="black" />
    </IconContainer>
  );
};

export default ({ selectedIdx, setSelectedIdx }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderTopColor: "black",
        borderTopWidth: 0.5,
      }}
    >
      <TabButton
        isSelected={selectedIdx === 0}
        nameOn={"bulb"}
        nameOff={"bulb-outline"}
        onPress={() => setSelectedIdx(0)}
      />
      <TabButton
        isSelected={selectedIdx === 1}
        nameOn={"chatbubble"}
        nameOff={"chatbubble-outline"}
        onPress={() => setSelectedIdx(1)}
      />
      <TabButton
        isSelected={selectedIdx === 2}
        nameOn={"pricetag"}
        nameOff={"pricetag-outline"}
        onPress={() => setSelectedIdx(2)}
      />
      <TabButton
        isSelected={selectedIdx === 3}
        nameOn={"add-circle"}
        nameOff={"add-circle-outline"}
        onPress={() => setSelectedIdx(3)}
      />
    </View>
  );
};
