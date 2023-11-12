import {
  HStack,
  Menu,
  Avatar,
  AvatarImage,
  Pressable,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';
import { Icons } from '../assets/icons';
import Colors from '../constants/Colors';
import FontSize from '../constants/FontSize';

type Props = {
  caption?: string;
};

const TabHeader: React.FC<Props> = ({ caption }) => {
  const { Menu } = Icons;
  return (
    <HStack justifyContent="space-between" alignItems="center" mb={30}>
      <Pressable onPress={() => console.warn('press')}>
        <Menu />
      </Pressable>
      {caption && (
        <Text color={Colors.text} fontSize={FontSize.xl2} fontWeight="bold">
          {caption}
        </Text>
      )}
      <Avatar size="sm" rounded={10}>
        <AvatarImage
          source={{
            uri: 'https://images.unsplash.com/photo-1691959821866-9da50ed18ba7?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          role="none"
        />
      </Avatar>
    </HStack>
  );
};

export default TabHeader;
