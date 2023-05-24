import React from "react";
import { Text, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

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

const Row = styled.View`
  width: 100%;
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]}
  padding-bottom: ${(props) => props.theme.space[2]}
  justify-content: space-between;
`;

const Rating = styled.View`
  flex-direction: row;
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Matt's El Rancho",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://res.cloudinary.com/the-infatuation/image/upload/q_auto,f_auto/images/_E0A9983_n8gwzh",
    ],
    address = "2613 S Lamar Blvd, Austin, TX 78704",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArr = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <RestaurantCardContent>
        <Title>{name}</Title>
        <Row>
          <Rating>
            {ratingArr.map(() => (
              <SvgXml xml={star} height={20} width={20} />
            ))}
          </Rating>
          {isClosedTemporarily && (
            <Text variant="label" style={{ color: "red" }}>
              CLOSED TEMPORARILY
            </Text>
          )}
          {isOpenNow ? <SvgXml xml={open} width={20} /> : null}
          <Image source={icon} style={{ height: 15, width: 15 }} />
        </Row>
        <Address>{address}</Address>
      </RestaurantCardContent>
    </RestaurantCard>
  );
};
