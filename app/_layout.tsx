import useCachedResources from '@/hooks/useCachedResources';
import { client } from '@/services/apollo';
import { ApolloProvider } from '@apollo/client';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
            {/* Would be nice to use Stack or other navigational patterns to retain some of the native feel and animaition */}
            {/* <Stack
              screenOptions={{
                header: () => null,
              }}
            /> */}
            <Slot />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}
