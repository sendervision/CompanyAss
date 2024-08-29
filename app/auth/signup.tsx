import React, { memo, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Surface, Text, Button } from 'react-native-paper';

import { TextInput, Logo } from '@/components';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '@/utils/validator';
import { StyleComponent } from '@/styles/style';
import { Link, router } from 'expo-router';



function RegisterScreen() {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    try {
      // Service for signup

      router.navigate("/auth/code")
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
    }
  };

  return (
    <Surface style={{ ...StyleComponent.container, paddingTop: 20 }}>

      <Text variant='titleLarge' style={StyleComponent.title} >Créer un compte</Text>

      <TextInput
        label="Nom"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
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
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Créer un compte
      </Button>


      <View style={styles.row}>
        <Text style={styles.label}>Avez-vous un compte? </Text>
        <Link style={styles.link} href="/auth/login">
          <Text style={{ fontWeight: 'bold' }}>Se connecter</Text>
        </Link>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  label: {
    textAlign: "center"
    // color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: "center"
  },
  link: {
    fontWeight: 'bold',
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    // color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);
