import { Surface, Text, Button } from "react-native-paper";
import { StatusBar, StyleSheet } from "react-native";
import { router } from "expo-router"

import { Logo } from "@/components";
import Locales from "@/locales";

export default function OnboardingScreen() {

  return (
    <Surface style={styles.container}>
      <Logo />
      <Text variant="displaySmall" style={styles.label}>{Locales.t("appName")}</Text>

      <Text style={styles.label}>
        CompanyAss une application de cotisation pour le groupe {Locales.t("appName")}
      </Text>
      <Button mode="contained" onPress={() => router.navigate("/auth/login")}>
        Se connecter
      </Button>
      <Button
        mode="outlined"
        onPress={() => router.navigate("/auth/signup")}
      >
        Créer un compte
      </Button>
    </Surface>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    gap: 16,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  label: {
    textAlign: "center",
    textAlignVertical: "center"
  }
})