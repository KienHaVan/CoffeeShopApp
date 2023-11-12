import {
  Box,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabHeader from '../../components/tab-header';
import CartItem from '../../components/cart-item';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';

const CartScreen = () => {
  return (
    <SafeAreaView edges={['top']}>
      <VStack px={30}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TabHeader caption="Cart" />
          <VStack gap={12}>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <HStack justifyContent="space-between" alignItems="center" mt={20}>
              <VStack alignItems="center" gap={8}>
                <Text
                  fontWeight="bold"
                  fontSize={FontSize.xl}
                  color={Colors.text}
                >
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
                <Text
                  fontWeight="bold"
                  fontSize={FontSize.xl2}
                  color={Colors.text}
                >
                  Pay
                </Text>
              </Pressable>
            </HStack>
            <Box h={12} />
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
};

export default CartScreen;
