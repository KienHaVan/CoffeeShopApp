import {
  EyeIcon,
  EyeOffIcon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  InputIcon,
  Pressable,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '../../assets/icons';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
  const { Left } = Icons;
  return (
    <View flex={1}>
      <SafeAreaView edges={['top']} style={{ display: 'flex', flex: 1 }}>
        <VStack px={20} alignItems="center" flex={1}>
          <Pressable
            width={32}
            height={32}
            justifyContent="center"
            alignSelf="flex-start"
            alignItems="center"
            rounded={8}
            bgColor={Colors.dark_gray}
            onPress={() => router.back()}
          >
            <Left />
          </Pressable>
          <VStack
            flex={1}
            justifyContent="center"
            alignItems="center"
            width="$full"
            gap={34}
          >
            <Text
              fontWeight="bold"
              fontSize={FontSize.xl3}
              lineHeight={36}
              color={Colors.text}
              mt={24}
            >
              Register
            </Text>
            <VStack mt={24} gap={12} width="$full">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={false}
              >
                <FormControlLabel mb="$1">
                  <FormControlLabelText color={Colors.text}>
                    Email Address
                  </FormControlLabelText>
                </FormControlLabel>
                <Input>
                  <InputField
                    type="text"
                    placeholder="Enter your email address..."
                    color={Colors.text}
                  />
                </Input>
              </FormControl>
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={false}
              >
                <FormControlLabel mb="$1">
                  <FormControlLabelText color={Colors.text}>
                    Password
                  </FormControlLabelText>
                </FormControlLabel>
                <Input justifyContent="center" alignItems="center">
                  <InputField
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password..."
                    color={Colors.text}
                  />
                  <Pressable
                    pr="$3"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <InputIcon as={EyeIcon} color={Colors.primary} />
                    ) : (
                      <InputIcon as={EyeOffIcon} color={Colors.primary} />
                    )}
                  </Pressable>
                </Input>
              </FormControl>
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={false}
              >
                <FormControlLabel mb="$1">
                  <FormControlLabelText color={Colors.text}>
                    Confirm Password
                  </FormControlLabelText>
                </FormControlLabel>
                <Input justifyContent="center" alignItems="center">
                  <InputField
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password..."
                    color={Colors.text}
                  />
                  <Pressable
                    pr="$3"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <InputIcon as={EyeIcon} color={Colors.primary} />
                    ) : (
                      <InputIcon as={EyeOffIcon} color={Colors.primary} />
                    )}
                  </Pressable>
                </Input>
              </FormControl>
            </VStack>
            <Pressable
              w={330}
              h={52}
              justifyContent="center"
              alignItems="center"
              rounded={20}
              my={12}
              bgColor={Colors.primary}
              onPress={() => {}}
            >
              <Text
                fontWeight="bold"
                fontSize={FontSize.xl}
                color={Colors.text}
              >
                Register
              </Text>
            </Pressable>
          </VStack>
        </VStack>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;
