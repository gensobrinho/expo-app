import { useColorScheme } from "@shared/hooks/useColorScheme";
import { useFonts } from "expo-font";

export const useInitializeApp = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("../../../assets/fonts/Inter.ttf")
  });

  return {
    colorScheme,
    loaded,
  };
};
