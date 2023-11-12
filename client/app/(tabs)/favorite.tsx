import { Box, VStack } from '@gluestack-ui/themed';
import React from 'react';
import FavoriteItem from '../../components/favorite-item';
import TabPageLayout from '../../components/tab-page-layout';

const FavoriteScreen = () => {
  return (
    <TabPageLayout caption="Favorites">
      <VStack gap={12}>
        <FavoriteItem />
        <FavoriteItem />
        <FavoriteItem />
        <FavoriteItem />
        <Box h={12} />
      </VStack>
    </TabPageLayout>
  );
};

export default FavoriteScreen;
