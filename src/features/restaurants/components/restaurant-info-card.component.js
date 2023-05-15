import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardContent = styled(Card.Content)`
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-horizontal: ${(props) => props.theme.space[2]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]}
  padding-bottom: ${(props) => props.theme.space[2]}
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
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

  const ratingArr = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <RestaurantCardContent>
        <Title>{name}</Title>
        <Rating>
          {ratingArr.map(() => (
            <SvgXml xml={star} height={20} width={20} />
          ))}
        </Rating>
        <Address>{address}</Address>
      </RestaurantCardContent>
    </RestaurantCard>
  );
};
