
import { StackHeader } from "@/components"
import { Stack } from "expo-router"

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        animation: "slide_from_right",
        animationDuration: 1000,
        header: (props) => <StackHeader navProps={props} children={undefined} />
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="code" />
    </Stack>
  )
}
