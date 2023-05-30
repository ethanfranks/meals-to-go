import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardContent = styled(Card.Content)`
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-horizontal: ${(props) => props.theme.space[2]};
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]}
  padding-bottom: ${(props) => props.theme.space[2]}
  justify-content: space-between;
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;
