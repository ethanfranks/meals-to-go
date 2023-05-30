import React from "react";
import { SvgXml } from "react-native-svg";
import open from "../../../../assets/open";
import star from "../../../../assets/star";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Icon,
  Rating,
  RestaurantCard,
  RestaurantCardContent,
  RestaurantCardCover,
  Row,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Matt's El Rancho",
    icon = "data:image/png;base64,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",
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
        <Text variant="label">{name}</Text>
        <Row>
          <Rating>
            {ratingArr.map(() => (
              <SvgXml xml={star} height={20} width={20} />
            ))}
          </Rating>
          <Spacer position="left" size="large">
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
          </Spacer>
          {isOpenNow ? <SvgXml xml={open} width={20} /> : null}
          <Icon source={{ uri: `${icon}` }} />
        </Row>
        <Text variant="caption">{address}</Text>
      </RestaurantCardContent>
    </RestaurantCard>
  );
};
