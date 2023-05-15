import React, { useState } from "react";
import { Platform, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${isAndroid && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

const RestaurantScreenSearchbar = styled(Searchbar)`
  border-radius: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
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
          elevation={2}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
