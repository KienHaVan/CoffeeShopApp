import { Box, HStack, Pressable, Text, VStack } from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import React from 'react';
import { Icons } from '../assets/icons';
import Colors from '../constants/Colors';
import FontSize from '../constants/FontSize';

const FavoriteItem = () => {
  const { Heart, Bean, Location, Star } = Icons;
  return (
    <VStack rounded={22} bgColor={Colors.dark_gray}>
      <Box position="relative">
        <HStack
          px={22}
          justifyContent="flex-end"
          alignItems="center"
          position="absolute"
          top={22}
          left={0}
          w={'$full'}
          zIndex={1}
        >
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
        </HStack>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1691959821866-9da50ed18ba7?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{
            width: '100%',
            height: 400,
            borderTopLeftRadius: 22,
            borderTopRightRadius: 22,
          }}
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
                fontSize={FontSize.xl2}
                color={Colors.text}
              >
                Robusta Beans
              </Text>
              <Text fontSize={FontSize.lg} color={Colors.text}>
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
                <Text fontSize={FontSize.sm} color={Colors.text}>
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
                <Text fontSize={FontSize.sm} color={Colors.text}>
                  Africa
                </Text>
              </Box>
            </HStack>
          </HStack>
          <HStack justifyContent="space-between" alignItems="center">
            <HStack gap={8}>
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
      <VStack gap={12} my={12} px={20}>
        <Text fontWeight="bold" fontSize={FontSize.md} color={Colors.text}>
          Description
        </Text>
        <Text
          fontWeight="normal"
          fontSize={FontSize.sm}
          color={Colors.text}
          numberOfLines={4}
        >
          Arabica beans are by far the most popular type of coffee beans, making
          up about 60% of the world’s coffee. These tasty beans originated many
          centuries ago in the highlands of Ethiopia, and may even be the first
          coffee beans ever consumed!{' '}
        </Text>
      </VStack>
    </VStack>
  );
};

export default FavoriteItem;
