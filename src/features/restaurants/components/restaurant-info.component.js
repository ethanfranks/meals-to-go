import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-paper";
import { colors } from "../../../utils/colors";

export const RestaurantInfo = ({ restaurant = {} }) => {
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
    <Card>
      <Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
      <Card.Content>
        <Text>{name}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cover: {},
});
