import {
  Badge,
  Box,
  Divider,
  HStack,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import React from 'react';
import Colors from '../constants/Colors';
import FontSize from '../constants/FontSize';

const NotificationItem = () => {
  return (
    <VStack gap={8} p={16} bgColor={Colors.dark_gray} rounded={22}>
      <HStack gap={22} alignItems="center">
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1691959821866-9da50ed18ba7?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{ width: 60, height: 60, borderRadius: 12 }}
          contentFit="cover"
          transition={200}
        />
        <VStack>
          <Text fontWeight="bold" fontSize={FontSize.lg} color={Colors.text}>
            Robusta Beans
          </Text>
          <Text fontSize={FontSize.sm} color={Colors.text}>
            From Africa
          </Text>
        </VStack>
        <HStack gap={4} ml="auto">
          <Text
            fontSize={FontSize.xl2}
            fontWeight="bold"
            color={Colors.primary}
          >
            $
          </Text>
          <Text fontSize={FontSize.xl2} fontWeight="bold" color={Colors.text}>
            37.20
          </Text>
        </HStack>
      </HStack>
      <VStack gap={8}>
        <HStack alignItems="center" justifyContent="space-between">
          <Badge
            rounded={12}
            py={12}
            px={22}
            bgColor={Colors.background}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontWeight="bold" fontSize={FontSize.xl2} color={Colors.text}>
              S
            </Text>
            <Divider
              orientation="vertical"
              mx="$3.5"
              bg={Colors.light_gray}
              h={15}
            />
            <HStack gap={4}>
              <Text
                fontSize={FontSize.xl2}
                fontWeight="bold"
                color={Colors.primary}
              >
                $
              </Text>
              <Text
                fontSize={FontSize.xl2}
                fontWeight="bold"
                color={Colors.text}
              >
                4.20
              </Text>
            </HStack>
          </Badge>
          <HStack gap={4}>
            <Text
              fontSize={FontSize.xl2}
              fontWeight="bold"
              color={Colors.primary}
            >
              x
            </Text>
            <Text fontSize={FontSize.xl2} fontWeight="bold" color={Colors.text}>
              2
            </Text>
          </HStack>
          <Text
            fontSize={FontSize.xl2}
            fontWeight="bold"
            color={Colors.primary}
          >
            2
          </Text>
        </HStack>
        <HStack alignItems="center" justifyContent="space-between">
          <Badge
            rounded={12}
            py={12}
            px={22}
            bgColor={Colors.background}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontWeight="bold" fontSize={FontSize.xl2} color={Colors.text}>
              M
            </Text>
            <Divider
              orientation="vertical"
              mx="$3.5"
              bg={Colors.light_gray}
              h={15}
            />
            <HStack gap={4}>
              <Text
                fontSize={FontSize.xl2}
                fontWeight="bold"
                color={Colors.primary}
              >
                $
              </Text>
              <Text
                fontSize={FontSize.xl2}
                fontWeight="bold"
                color={Colors.text}
              >
                4.20
              </Text>
            </HStack>
          </Badge>
          <HStack gap={4}>
            <Text
              fontSize={FontSize.xl2}
              fontWeight="bold"
              color={Colors.primary}
            >
              x
            </Text>
            <Text fontSize={FontSize.xl2} fontWeight="bold" color={Colors.text}>
              2
            </Text>
          </HStack>
          <Text
            fontSize={FontSize.xl2}
            fontWeight="bold"
            color={Colors.primary}
          >
            2
          </Text>
        </HStack>
        <HStack alignItems="center" justifyContent="space-between">
          <Badge
            rounded={12}
            py={12}
            px={22}
            bgColor={Colors.background}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontWeight="bold" fontSize={FontSize.xl2} color={Colors.text}>
              L
            </Text>
            <Divider
              orientation="vertical"
              mx="$3.5"
              bg={Colors.light_gray}
              h={15}
            />
            <HStack gap={4}>
              <Text
                fontSize={FontSize.xl2}
                fontWeight="bold"
                color={Colors.primary}
              >
                $
              </Text>
              <Text
                fontSize={FontSize.xl2}
                fontWeight="bold"
                color={Colors.text}
              >
                4.20
              </Text>
            </HStack>
          </Badge>
          <HStack gap={4}>
            <Text
              fontSize={FontSize.xl2}
              fontWeight="bold"
              color={Colors.primary}
            >
              x
            </Text>
            <Text fontSize={FontSize.xl2} fontWeight="bold" color={Colors.text}>
              2
            </Text>
          </HStack>
          <Text
            fontSize={FontSize.xl2}
            fontWeight="bold"
            color={Colors.primary}
          >
            2
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default NotificationItem;
