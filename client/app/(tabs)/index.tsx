import {
  Avatar,
  AvatarImage,
  Box,
  HStack,
  Pressable,
  Text,
  View,
} from '@gluestack-ui/themed';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '../../assets/icons';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const HomeScreen = () => {
  const { Menu, Search } = Icons;
  return (
    <SafeAreaView>
      <Box px={30}>
        <HStack justifyContent="space-between" alignItems="center" mb={30}>
          <Pressable onPress={() => console.warn('press')}>
            <Menu />
          </Pressable>
          <Avatar size="sm" rounded={10}>
            <AvatarImage
              source={{
                uri: 'https://images.unsplash.com/photo-1691959821866-9da50ed18ba7?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
            />
          </Avatar>
        </HStack>
        <Text
          color={Colors.text}
          fontSize={FontSize.xl3}
          lineHeight={36}
          fontWeight="700"
        >
          {`Find the best\ncoffee for you`}
        </Text>
        <HStack mt={28} bgColor={Colors.light_gray} rounded={15} flex={1}>
          <Search />
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
