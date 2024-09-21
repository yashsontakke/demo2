import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme, //1. Import this package
} from "react-native-paper";

//2. Import Router Theme
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

//3. Install deepmerge first and import it
import merge from "deepmerge";

import { Colors } from "../constants/Colors";

const customDarkTheme = { ...MD3DarkTheme, colors: Colors.dark };
const customLightTheme = { ...MD3LightTheme, colors: Colors.light };

//4. The adaptNavigationTheme function takes an existing React Navigation 
// theme and returns a React Navigation theme using the colors from 
// Material Design 3.
const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

//5.We will merge React Native Paper Theme and Expo Router Theme 
// using deepmerge
const CombinedLightTheme = merge(LightTheme, customLightTheme);
const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);

export default function RootLayout() {
    const colorScheme = useColorScheme();
  
  //6. Let's use the merged themes
    const paperTheme =
      colorScheme === "dark" ? CombinedDarkTheme : CombinedLightTheme;
  
    return (
      <PaperProvider theme={paperTheme}>
        
        <ThemeProvider value={paperTheme}>
          <Stack>
            <Stack.Screen
                  name="(tabs)"
                  options={{
                    headerShown: false,
                  }}
                />
          </Stack>
        </ThemeProvider>
      </PaperProvider>
  )
}