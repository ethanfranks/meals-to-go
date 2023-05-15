import React, { useState } from "react";
import { Platform, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../../../utils/colors";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${isAndroid && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchContainer = styled.View`
  padding: 16px;
  justify-content: center;
`;

const RestaurantScreenSearchbar = styled(Searchbar)`
  border-radius: 5px;
  background-color: ${colors.white};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeArea>
      <SearchContainer>
        <RestaurantScreenSearchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          elevation={4}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
