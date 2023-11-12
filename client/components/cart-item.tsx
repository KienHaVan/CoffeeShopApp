import {
  Badge,
  Box,
  HStack,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import React from 'react';
import Colors from '../constants/Colors';
import FontSize from '../constants/FontSize';
import { BadgeText } from '@gluestack-ui/themed';

const CartItem = () => {
  return (
    <VStack gap={12} p={16} bgColor={Colors.dark_gray} rounded={22}>
      <HStack gap={22} alignItems="center">
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1691959821866-9da50ed18ba7?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{ width: 100, height: 100, borderRadius: 23 }}
          contentFit="cover"
          transition={200}
        />
        <VStack gap={4}>
          <Text fontWeight="bold" fontSize={FontSize.xl2} color={Colors.text}>
            Robusta Beans
          </Text>
          <Text fontSize={FontSize.lg} color={Colors.text}>
            From Africa
          </Text>
          <Badge
            size="md"
            variant="solid"
            rounded={12}
            p={12}
            bgColor={Colors.background}
            justifyContent="center"
            alignItems="center"
          >
            <Text color={Colors.text}>Medium Roasted</Text>
          </Badge>
        </VStack>
      </HStack>
      <VStack gap={8}>
        <HStack alignItems="center" justifyContent="space-between">
          <Badge
            w={62}
            rounded={12}
            p={12}
            bgColor={Colors.background}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontWeight="bold" fontSize={FontSize.xl2} color={Colors.text}>
              S
            </Text>
          </Badge>
          <HStack gap={4}>
            <Text
              fontSize={FontSize.xl2}
              fontWeight="bold"
              color={Colors.primary}
            >
              $
            </Text>
            <Text fontSize={FontSize.xl2} fontWeight="bold" color={Colors.text}>
              4.20
            </Text>
          </HStack>
          <Pressable
            onPress={() => console.warn('press')}
            width={38}
            height={38}
            bgColor={Colors.primary}
            justifyContent="center"
            alignItems="center"
            rounded={8}
          >
            <Text fontSize={FontSize.xl2} fontWeight="bold" color={Colors.text}>
              -
            </Text>
          </Pressable>
          <Box
            py={10}
            w={62}
            bgColor={Colors.dark_gray}
            rounded={12}
            justifyContent="center"
            borderWidth={1}
            borderColor={Colors.primary}
            alignItems="center"
          >
            <Text fontWeight="bold" fontSize={FontSize.xl2} color={Colors.text}>
              10
            </Text>
          </Box>
          <Pressable
            onPress={() => console.warn('press')}
            width={38}
            height={38}
            bgColor={Colors.primary}
            justifyContent="center"
            alignItems="center"
            rounded={8}
          >
            <Text fontSize={FontSize.xl2} fontWeight="bold" color={Colors.text}>
              +
            </Text>
          </Pressable>
        </HStack>
        <HStack alignItems="center" justifyContent="space-between">
          <Badge
            w={62}
            rounded={12}
            p={12}
            bgColor={Colors.background}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontWeight="bold" fontSize={FontSize.xl2} color={Colors.text}>
              M
            </Text>
          </Badge>
          <HStack gap={4}>
            <Text
              fontSize={FontSize.xl2}
              fontWeight="bold"
              color={Colors.primary}
            >
              $
            </Text>
            <Text fontSize={FontSize.xl2} fontWeight="bold" color={Colors.text}>
              4.20
            </Text>
          </HStack>
          <Pressable
            onPress={() => console.warn('press')}
            width={38}
            height={38}
            bgColor={Colors.primary}
            justifyContent="center"
            alignItems="center"
            rounded={8}
          >
            <Text fontSize={FontSize.xl2} fontWeight="bold" color={Colors.text}>
              -
            </Text>
          </Pressable>
          <Box
            py={10}
            w={62}
            bgColor={Colors.dark_gray}
            rounded={12}
            justifyContent="center"
            borderWidth={1}
            borderColor={Colors.primary}
            alignItems="center"
          >
            <Text fontWeight="bold" fontSize={FontSize.xl2} color={Colors.text}>
              10
            </Text>
          </Box>
          <Pressable
            onPress={() => console.warn('press')}
            width={38}
            height={38}
            bgColor={Colors.primary}
            justifyContent="center"
            alignItems="center"
            rounded={8}
          >
            <Text fontSize={FontSize.xl2} fontWeight="bold" color={Colors.text}>
              +
            </Text>
          </Pressable>
        </HStack>
        <HStack alignItems="center" justifyContent="space-between">
          <Badge
            w={62}
            rounded={12}
            p={12}
            bgColor={Colors.background}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontWeight="bold" fontSize={FontSize.xl2} color={Colors.text}>
              L
            </Text>
          </Badge>
          <HStack gap={4}>
            <Text
              fontSize={FontSize.xl2}
              fontWeight="bold"
              color={Colors.primary}
            >
              $
            </Text>
            <Text fontSize={FontSize.xl2} fontWeight="bold" color={Colors.text}>
              4.20
            </Text>
          </HStack>
          <Pressable
            onPress={() => console.warn('press')}
            width={38}
            height={38}
            bgColor={Colors.primary}
            justifyContent="center"
            alignItems="center"
            rounded={8}
          >
            <Text fontSize={FontSize.xl2} fontWeight="bold" color={Colors.text}>
              -
            </Text>
          </Pressable>
          <Box
            py={10}
            w={62}
            bgColor={Colors.dark_gray}
            rounded={12}
            justifyContent="center"
            borderWidth={1}
            borderColor={Colors.primary}
            alignItems="center"
          >
            <Text fontWeight="bold" fontSize={FontSize.xl2} color={Colors.text}>
              10
            </Text>
          </Box>
          <Pressable
            onPress={() => console.warn('press')}
            width={38}
            height={38}
            bgColor={Colors.primary}
            justifyContent="center"
            alignItems="center"
            rounded={8}
          >
            <Text fontSize={FontSize.xl2} fontWeight="bold" color={Colors.text}>
              +
            </Text>
          </Pressable>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default CartItem;
