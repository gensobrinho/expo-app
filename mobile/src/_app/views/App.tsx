import { ThemeProvider as EmotionProvider } from "@emotion/react";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { darkColorSchema, lightColorSchema, theme } from "@shared/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useInitializeApp } from "../hooks/useInitializeApp";
import RouterSlot from "./RouterSlot";

export default function App() {
  const { colorScheme, loaded } = useInitializeApp();

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const client = new QueryClient();

  return (
    <ThemeProvider value={DarkTheme}>
      <QueryClientProvider client={client}>
        <EmotionProvider
          theme={{
            ...theme,
            colors: colorScheme === "dark" ? darkColorSchema : lightColorSchema,
          }}
        >
          <SafeAreaProvider>
            <RouterSlot />
            <StatusBar style="inverted" />
          </SafeAreaProvider>
        </EmotionProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
