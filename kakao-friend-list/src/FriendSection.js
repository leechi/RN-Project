import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ArrowButton = styled.TouchableOpacity``;

const FriendLen = styled.Text`
  color: grey;
`;

export default ({ isOpened, freindLen, onPressArrow }) => {
  return (
    <Container>
      <FriendLen>친구 {freindLen}</FriendLen>
      <ArrowButton onPress={onPressArrow}>
        <MaterialIcons
          name={isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="lightgrey"
        />
      </ArrowButton>
    </Container>
  );
};
