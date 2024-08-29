import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Button, Surface, useTheme, Text } from "react-native-paper"
import { Logo, TextInput } from '@/components';
import { emailValidator, passwordValidator } from '@/utils/validator';
import { StyleComponent } from '@/styles/style';
import { Link } from 'expo-router';
import { router } from 'expo-router';


function LoginScreen() {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    router.replace("/(tabs)")
  };

  return (
    <Surface style={StyleComponent.container}>

      <Text variant="titleLarge" style={StyleComponent.title}>Heureux de vous revoir</Text>

      <Logo />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text: any) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Mot de passe"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: any) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => { }}
      >
        <Text style={styles.label}>Mot de passe oublié</Text>
      </TouchableOpacity>

      <Button mode="contained" onPress={_onLoginPressed}>
        Se connecter
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Vous n'avez pas de compte? </Text>
        <Link style={{ textAlignVertical: "center" }} href="/auth/signup">
          <Text style={styles.link}>Créer un compte</Text>
        </Link>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: "center"
  },
  label: {
    textAlign: "center",
    // color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    textAlign: "center",
    // color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
