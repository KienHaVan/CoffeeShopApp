import { Box, HStack, Pressable, Text, VStack } from '@gluestack-ui/themed';
import React from 'react';
import CartItem from '../../components/cart-item';
import TabPageLayout from '../../components/tab-page-layout';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const CartScreen = () => {
  return (
    <TabPageLayout caption="Cart">
      <VStack gap={12}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <HStack justifyContent="space-between" alignItems="center" mt={20}>
          <VStack alignItems="center" gap={8}>
            <Text fontWeight="bold" fontSize={FontSize.xl} color={Colors.text}>
              Total Price
            </Text>
            <HStack gap={6} alignItems="center">
              <Text
                lineHeight={FontSize.xl25}
                fontWeight="bold"
                fontSize={FontSize.xl25}
                color={Colors.primary}
              >
                $
              </Text>
              <Text
                lineHeight={FontSize.xl25}
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
            <Text fontWeight="bold" fontSize={FontSize.xl2} color={Colors.text}>
              Pay
            </Text>
          </Pressable>
        </HStack>
        <Box h={12} />
      </VStack>
    </TabPageLayout>
  );
};

export default CartScreen;
