/* eslint-disable global-require */
import * as Font from "expo-font";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          "poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
          "poppins-medium": require("../assets/fonts/Poppins-Medium.ttf"),
          "poppins-semibold": require("../assets/fonts/Poppins-SemiBold.ttf"),
          "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
