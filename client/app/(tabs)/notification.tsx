import {
  Box,
  HStack,
  Pressable,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';
import React from 'react';
import TabPageLayout from '../../components/tab-page-layout';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import NotificationItem from '../../components/notification-item';

const NotificationScreen = () => {
  return (
    <VStack flex={1}>
      <View flex={1}>
        <TabPageLayout caption="Order History">
          <VStack gap={12}>
            <HStack justifyContent="space-between" alignItems="center">
              <VStack gap={8}>
                <Text
                  fontWeight="bold"
                  fontSize={FontSize.md}
                  color={Colors.text}
                >
                  Order Date
                </Text>
                <Text
                  lineHeight={FontSize.md}
                  fontWeight="semibold"
                  fontSize={FontSize.md}
                  color={Colors.text}
                >
                  20th March 16:13
                </Text>
              </VStack>
              <VStack alignItems="flex-end" gap={8}>
                <Text
                  fontWeight="bold"
                  fontSize={FontSize.md}
                  color={Colors.text}
                >
                  Total amount
                </Text>
                <Text
                  lineHeight={FontSize.md}
                  fontWeight="semibold"
                  fontSize={FontSize.md}
                  color={Colors.primary}
                >
                  $ 74.40
                </Text>
              </VStack>
            </HStack>
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <Box h={12} />
          </VStack>
        </TabPageLayout>
      </View>
      <HStack justifyContent="center" alignItems="center">
        <Pressable
          w={330}
          h={52}
          bgColor={Colors.primary}
          justifyContent="center"
          alignItems="center"
          rounded={20}
          my={12}
        >
          <Text fontWeight="bold" fontSize={FontSize.xl2} color={Colors.text}>
            Download
          </Text>
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default NotificationScreen;
