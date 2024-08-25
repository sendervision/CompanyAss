import { Link, router } from "expo-router"
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Bouton" onPress={() => router.navigate("hello")} />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
