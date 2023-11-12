import { Box, HStack, Pressable, Text, VStack } from '@gluestack-ui/themed';
import React from 'react';
import Colors from '../constants/Colors';
import FontSize from '../constants/FontSize';
import { Image } from 'expo-image';

const ProductItem = () => {
  return (
    <VStack
      justifyContent="center"
      alignContent="center"
      w={150}
      rounded={23}
      padding={12}
      bgColor={Colors.dark_gray}
    >
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1691959821866-9da50ed18ba7?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={{ width: 126, height: 126, borderRadius: 23 }}
        contentFit="cover"
        transition={200}
      />
      <Text mt={12} color={Colors.text} fontSize={FontSize.xl} lineHeight={20}>
        Cappuccino
      </Text>
      <Text mt={4} color={Colors.text} fontSize={FontSize.md} lineHeight={20}>
        With Steamed Milk
      </Text>
      <HStack
        mt={12}
        justifyContent="space-between"
        alignItems="center"
        mb={10}
      >
        <HStack gap={6}>
          <Text
            color={Colors.primary}
            fontSize={FontSize.xl2}
            fontWeight="bold"
          >
            $
          </Text>
          <Text color={Colors.text} fontSize={FontSize.xl2} fontWeight="bold">
            4.20
          </Text>
        </HStack>
        <Pressable
          width={28}
          height={28}
          justifyContent="center"
          alignItems="center"
          rounded={8}
          bgColor={Colors.primary}
        >
          <Text color={Colors.text} fontWeight="bold">
            +
          </Text>
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default ProductItem;
