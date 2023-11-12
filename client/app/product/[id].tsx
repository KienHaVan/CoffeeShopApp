import {
  Box,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import { Icons } from '../../assets/icons';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import FontSize from '../../constants/FontSize';

const selection = ['250', '500', '1000'];

const ProductDetail = () => {
  const { Heart, Left, Bean, Location, Star } = Icons;
  const [weighChoice, setWeighChoice] = useState(selection[0]);
  const router = useRouter();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack>
        <Box position="relative">
          <HStack
            px={22}
            justifyContent="space-between"
            alignItems="center"
            position="absolute"
            top={0}
            left={0}
            w={'$full'}
            zIndex={1}
          >
            <SafeAreaView>
              <Pressable
                width={32}
                height={32}
                justifyContent="center"
                alignItems="center"
                rounded={8}
                bgColor={Colors.dark_gray}
                onPress={() => router.back()}
              >
                <Left />
              </Pressable>
            </SafeAreaView>
            <SafeAreaView>
              <Pressable
                width={32}
                height={32}
                justifyContent="center"
                alignItems="center"
                rounded={8}
                bgColor={Colors.dark_gray}
              >
                <Heart />
              </Pressable>
            </SafeAreaView>
          </HStack>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1691959821866-9da50ed18ba7?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={{ width: '100%', height: 510 }}
            contentFit="cover"
            transition={500}
          />
          <VStack
            p={22}
            position="absolute"
            bottom={0}
            left={0}
            w={'$full'}
            zIndex={1}
            bgColor={Colors.primaryBlackRGBA}
            height={150}
            borderTopLeftRadius={32}
            borderTopRightRadius={32}
            gap={12}
          >
            <HStack justifyContent="space-between" alignItems="center">
              <VStack gap={4}>
                <Text
                  fontWeight="bold"
                  fontSize={FontSize.xl25}
                  color={Colors.text}
                >
                  Robusta Beans
                </Text>
                <Text fontSize={FontSize.xl} color={Colors.text}>
                  From Africa
                </Text>
              </VStack>
              <HStack gap={20}>
                <VStack
                  width={62}
                  height={62}
                  justifyContent="space-between"
                  alignItems="center"
                  rounded={8}
                  bgColor={Colors.background}
                  p={12}
                >
                  <Bean />
                  <Text fontSize={FontSize.md} color={Colors.text}>
                    Bean
                  </Text>
                </VStack>
                <Box
                  width={62}
                  height={62}
                  justifyContent="space-between"
                  alignItems="center"
                  rounded={8}
                  bgColor={Colors.background}
                  p={12}
                >
                  <Location />
                  <Text fontSize={FontSize.md} color={Colors.text}>
                    Africa
                  </Text>
                </Box>
              </HStack>
            </HStack>
            <HStack justifyContent="space-between" alignItems="center">
              <HStack gap={12}>
                <Star />
                <Text
                  fontSize={FontSize.xl2}
                  fontWeight="bold"
                  color={Colors.text}
                >
                  4.5
                </Text>
                <Text fontSize={FontSize.md} color={Colors.text}>
                  (6,7899)
                </Text>
              </HStack>
              <Box bgColor={Colors.background} px={18} py={12} rounded={12}>
                <Text fontSize={FontSize.md} color={Colors.text}>
                  Medium Roasted
                </Text>
              </Box>
            </HStack>
          </VStack>
        </Box>
        <VStack px={20} mt={20}>
          <VStack gap={12}>
            <Text fontWeight="bold" fontSize={FontSize.xl} color={Colors.text}>
              Description
            </Text>
            <Text
              fontWeight="normal"
              fontSize={FontSize.md}
              color={Colors.text}
            >
              Arabica beans are by far the most popular type of coffee beans,
              making up about 60% of the world’s coffee. These tasty beans
              originated many centuries ago in the highlands of Ethiopia, and
              may even be the first coffee beans ever consumed!{' '}
            </Text>
          </VStack>
          <VStack mt={8}>
            <Text fontWeight="bold" fontSize={FontSize.xl} color={Colors.text}>
              Size
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              mx={-20}
              mt={12}
            >
              {selection.map((item, index) => (
                <Pressable
                  pr={20}
                  pl={index === 0 ? 20 : 0}
                  key={index}
                  alignItems="center"
                  onPress={() => setWeighChoice(item)}
                >
                  <Box
                    py={10}
                    px={28}
                    bgColor={Colors.dark_gray}
                    rounded={12}
                    justifyContent="center"
                    borderWidth={2}
                    borderColor={
                      weighChoice === item ? Colors.primary : undefined
                    }
                  >
                    <Text
                      fontWeight="bold"
                      fontSize={FontSize.md}
                      color={
                        weighChoice === item ? Colors.primary : Colors.text
                      }
                    >
                      {item}gm
                    </Text>
                  </Box>
                </Pressable>
              ))}
            </ScrollView>
          </VStack>
          <HStack justifyContent="space-between" alignItems="center" mt={20}>
            <VStack alignItems="center" gap={8}>
              <Text
                fontWeight="bold"
                fontSize={FontSize.xl}
                color={Colors.text}
              >
                Price
              </Text>
              <HStack gap={6} alignItems="center">
                <Text
                  fontWeight="bold"
                  fontSize={FontSize.xl25}
                  color={Colors.primary}
                >
                  $
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize={FontSize.xl25}
                  color={Colors.text}
                >
                  10.50
                </Text>
              </HStack>
            </VStack>
            <Pressable
              py={20}
              px={62}
              bgColor={Colors.primary}
              rounded={20}
              alignItems="center"
              onPress={() => {}}
            >
              <Text
                fontWeight="bold"
                fontSize={FontSize.xl2}
                color={Colors.text}
              >
                Add to Cart
              </Text>
            </Pressable>
          </HStack>
        </VStack>
        <View h={22} />
      </VStack>
    </ScrollView>
  );
};

export default ProductDetail;
