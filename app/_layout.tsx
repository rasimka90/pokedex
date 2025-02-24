
import { useFonts } from 'expo-font';
import {  Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { ApolloProvider } from '@apollo/client';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { client } from '@/services/apollo';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import useCachedResources from '@/hooks/useCachedResources';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) return null;


    if (isLoadingComplete) {
      SplashScreen.hideAsync();
    }
  
    
  return (
    <ApolloProvider client={client}>
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <Slot />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  </ApolloProvider>
  );
}
