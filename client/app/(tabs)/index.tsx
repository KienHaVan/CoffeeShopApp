import {
  Input,
  InputField,
  ScrollView,
  VStack,
  View,
} from '@gluestack-ui/themed';
import {
  Avatar,
  AvatarImage,
  Box,
  HStack,
  Pressable,
  Text,
} from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '../../assets/icons';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import ProductItem from '../../components/product-item';
import { useRouter } from 'expo-router';
import TabHeader from '../../components/tab-header';

const menu = [
  'All',
  'Cappuccino',
  'Espresso',
  'Latte',
  'Mango',
  'Pineapple',
  'Straw',
];

const HomeScreen = () => {
  const router = useRouter();
  const { Menu, Search, Search_Fill } = Icons;
  const [searchValue, setSearchValue] = useState('');
  const [categoryChosen, setCategoryChosen] = useState('All');
  const navigateToProductDetail = () => {
    router.push('/product/1');
  };
  return (
    <SafeAreaView edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box px={30}>
          <TabHeader />
          <Text
            color={Colors.text}
            fontSize={FontSize.xl3}
            lineHeight={36}
            fontWeight="700"
          >
            {`Find the best\ncoffee for you`}
          </Text>
          <HStack
            my={28}
            bgColor={Colors.secondary}
            rounded={20}
            px={20}
            py={8}
            gap={8}
            justifyContent="space-between"
            alignItems="center"
          >
            {searchValue ? (
              <Search_Fill width={20} height={20} />
            ) : (
              <Search width={20} height={20} />
            )}
            <Input flex={1} outline="none" borderWidth={0}>
              <InputField
                placeholder="Find Your Coffee..."
                color={Colors.text}
                value={searchValue}
                onChangeText={(value) => setSearchValue(value)}
              />
            </Input>
          </HStack>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            mx={-30}
          >
            {menu.map((item, index) => (
              <VStack
                pr={20}
                pl={index === 0 ? 30 : 0}
                key={index}
                alignItems="center"
                gap={8}
              >
                <Pressable onPress={() => setCategoryChosen(item)}>
                  <Text
                    fontWeight="700"
                    fontSize={FontSize.xl}
                    lineHeight={20}
                    color={
                      item === categoryChosen
                        ? Colors.primary
                        : Colors.light_gray
                    }
                  >
                    {item}
                  </Text>
                </Pressable>
                {item === categoryChosen && (
                  <Box
                    width={8}
                    height={8}
                    rounded="$full"
                    bgColor={Colors.primary}
                  />
                )}
              </VStack>
            ))}
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            mx={-30}
            mt={22}
          >
            {menu.map((item, index) => (
              <Pressable
                pr={20}
                pl={index === 0 ? 30 : 0}
                key={index}
                alignItems="center"
                onPress={navigateToProductDetail}
              >
                <ProductItem />
              </Pressable>
            ))}
          </ScrollView>
          <Text
            mt={24}
            fontSize={FontSize.xl2}
            color={Colors.text}
            fontWeight="bold"
          >
            Coffee beans
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            mx={-30}
            mt={22}
          >
            {menu.map((item, index) => (
              <Pressable
                pr={20}
                pl={index === 0 ? 30 : 0}
                key={index}
                alignItems="center"
                onPress={navigateToProductDetail}
              >
                <ProductItem />
              </Pressable>
            ))}
          </ScrollView>
          <View height={12} />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
