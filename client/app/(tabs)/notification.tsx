import { HStack, Text, VStack } from '@gluestack-ui/themed';
import React from 'react';
import TabPageLayout from '../../components/tab-page-layout';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import NotificationItem from '../../components/notification-item';

const NotificationScreen = () => {
  return (
    <TabPageLayout caption="Order History">
      <VStack gap={12}>
        <HStack justifyContent="space-between" alignItems="center">
          <VStack gap={8}>
            <Text fontWeight="bold" fontSize={FontSize.md} color={Colors.text}>
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
            <Text fontWeight="bold" fontSize={FontSize.md} color={Colors.text}>
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
      </VStack>
    </TabPageLayout>
  );
};

export default NotificationScreen;
