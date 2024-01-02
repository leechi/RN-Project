import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styled from "styled-components";

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;

const HeaderTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

const IconButtonContainer = styled.View`
  flex-direction: row;
`;

const IconContainer = styled.TouchableOpacity`
  padding: 0 6px;
`;

const IconButton = ({ name }) => {
  return (
    <IconContainer hitSlop={{ top: 15, bottom: 15 }}>
      <Ionicons name={name} size={24} color="black" />
    </IconContainer>
  );
};

export default () => {
  return (
    <HeaderContainer>
      <HeaderTitle>친구</HeaderTitle>
      <IconButtonContainer>
        <IconButton name="search-outline" />
        <IconButton name="person-add-outline" />
        <IconButton name="md-musical-notes-outline" />
        <IconButton name="ios-settings-outline" />
      </IconButtonContainer>
    </HeaderContainer>
  );
};
