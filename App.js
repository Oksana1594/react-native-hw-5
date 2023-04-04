import "react-native-gesture-handler";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { AppLoading } from "expo";
import { useRoute } from "./route";

export default function App() {
  // const [isReady, setIsReady] = useState(false);
  const routing = useRoute(true);

  // if (!isReady) {
  //   return (
  //     <AppLoading onFinish={() => setIsReady(true)} onError={console.warn} />
  //   );
  // }
  return <NavigationContainer>{routing}</NavigationContainer>;
}
