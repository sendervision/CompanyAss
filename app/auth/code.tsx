import React, { memo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Surface, Text, Button } from 'react-native-paper';

import { TextInput } from '@/components';
import { StyleComponent } from '@/styles/style';
import { router } from 'expo-router';



function ValidationCodeScreen() {

  const [code, setCode] = useState({ value: "", error: "" })

  const onPressCode = async () => {
    if (!code.value || code.value.length < 6){
      return setCode({value: code.value, error: "Code invalide"})
    }


    try {
      // Code for verification code
      router.replace("/(tabs)")

    } catch (err: any) {
      setCode({value: "", error: "Code invalide"})
      console.log(err)
    }
  }

  return (
    <Surface style={{ ...StyleComponent.container, paddingTop: 60 }}>

      <Text variant='titleLarge' style={StyleComponent.title} >Entrer le code qui vous a été envoyer par mail</Text>

      <TextInput
        label="Code"
        returnKeyType="done"
        value={code.value}
        onChangeText={text => setCode({ value: text, error: '' })}
        error={!!code.error}
        errorText={code.error}
      />
      <Button mode="contained" onPress={onPressCode} style={styles.button}>
        Valider le code
      </Button>
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

export default memo(ValidationCodeScreen);
