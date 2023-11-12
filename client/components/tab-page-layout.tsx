import { ScrollView, VStack, View } from '@gluestack-ui/themed';
import React, { Children, FC, PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabHeader from './tab-header';

type Props = {
  caption?: string;
} & PropsWithChildren;

const TabPageLayout: FC<Props> = ({ caption, children }) => {
  return (
    <View>
      <SafeAreaView edges={['top']}>
        <VStack px={20}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TabHeader caption={caption} />
            {children}
          </ScrollView>
        </VStack>
      </SafeAreaView>
    </View>
  );
};

export default TabPageLayout;
