import { Slot, useRouter, useSegments } from "expo-router";
const RouterSlot = () => {
  const segments = useSegments();
  const router = useRouter();

  return <Slot />;
};

export default RouterSlot;
