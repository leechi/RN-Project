import { Text } from "react-native";
import styled from "styled-components";

const CalendarContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 17px;
  background-color: ${(props) =>
    props.isSelected ? "#c2c2c2" : "transparent"};
`;

export const Column = ({
  text,
  color,
  opacity,
  disabled,
  onPress,
  isSelected,
}) => {
  return (
    <CalendarContainer
      disabled={disabled}
      onPress={onPress}
      isSelected={isSelected}
    >
      <Text style={{ color, opacity }}>{text}</Text>
    </CalendarContainer>
  );
};
