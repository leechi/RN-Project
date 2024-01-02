import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/Header";
import { friendProfiles, myProfile } from "./src/data";
import Profile from "./src/Profile";
import { useState } from "react";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import TabBar from "./src/TabBar";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Profile
          uri={item.uri}
          name={item.name}
          introduction={item.introduction}
          isMe={false}
        />
      </View>
    );
  };
  const ItemSeparatorComponent = () => <Margin height={13} />;

  const ListHeaderComponent = () => {
    return (
      <View style={{ backgroundColor: "white" }}>
        <Header />
        <Margin height={10} />
        <Profile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
          isMe={true}
        />
        <Margin height={15} />
        <Division />
        <Margin height={12} />
        <FriendSection
          isOpened={isOpened}
          onPressArrow={onPressArrow}
          freindLen={friendProfiles.length}
        />
      </View>
    );
  };
  const ListFooterComponent = () => <Margin height={10} />;
  return (
    <SafeAreaProvider>
      <SafeAreaView
        edges={["right", "bottom", "left", "top"]}
        style={{ flex: 1 }}
      >
        <FlatList
          data={isOpened ? friendProfiles : []}
          keyExtractor={(_, index) => index}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickyHeaderIndices={[0]}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
        <TabBar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
