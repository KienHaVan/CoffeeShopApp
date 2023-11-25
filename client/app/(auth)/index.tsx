import { Box, Pressable, Text, VStack, View } from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import { useRouter } from 'expo-router';

const WelcomeScreen = () => {
  const router = useRouter();
  return (
    <View backgroundColor="#0C0F14" flex={1}>
      <SafeAreaView edges={['top']} style={{ display: 'flex', flex: 1 }}>
        <VStack px={20} alignItems="center" flex={1}>
          <Image
            source={require('../../assets/images/logo_small.png')}
            style={{ width: 360, height: 360 }}
          />
          <VStack gap={12} mt={12}>
            <Text
              color={Colors.text}
              fontSize={FontSize.xl3}
              lineHeight={36}
              fontWeight="700"
              textAlign="center"
            >
              Explore the app
            </Text>
            <Text
              color={Colors.text}
              fontSize={FontSize.lg}
              fontWeight="700"
              textAlign="center"
            >
              {`Now your finances are in one place\nand always under control`}
            </Text>
          </VStack>
          <VStack flex={1} justifyContent="center" gap={12}>
            <Pressable
              w={330}
              h={52}
              bgColor={Colors.secondary}
              justifyContent="center"
              alignItems="center"
              rounded={20}
              my={12}
              onPress={() => router.push('/login')}
            >
              <Text
                fontWeight="bold"
                fontSize={FontSize.xl}
                color={Colors.text}
              >
                Log in
              </Text>
            </Pressable>
            <Pressable
              w={330}
              h={52}
              justifyContent="center"
              alignItems="center"
              rounded={20}
              my={12}
              borderWidth={1}
              borderColor={Colors.text}
              onPress={() => router.push('/register')}
            >
              <Text
                fontWeight="bold"
                fontSize={FontSize.xl}
                color={Colors.text}
              >
                Create account
              </Text>
            </Pressable>
          </VStack>
        </VStack>
      </SafeAreaView>
    </View>
  );
};

export default WelcomeScreen;
