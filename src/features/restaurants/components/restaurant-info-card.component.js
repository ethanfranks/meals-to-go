import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../../../utils/colors";

const RestaurantCard = styled(Card)`
  background-color: ${colors.white};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 10px;
  background-color: ${colors.white};
`;

const RestaurantCardContent = styled(Card.Content)`
  padding-bottom: 10px;
  padding-horizontal: 10px;
`;

const Title = styled.Text`
  font-weight: bold;
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Matt's El Rancho",
    icon,
    photos = [
      "https://res.cloudinary.com/the-infatuation/image/upload/q_auto,f_auto/images/_E0A9983_n8gwzh",
    ],
    address = "2613 S Lamar Blvd, Austin, TX 78704",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <RestaurantCardContent>
        <Title>{name}</Title>
      </RestaurantCardContent>
    </RestaurantCard>
  );
};
