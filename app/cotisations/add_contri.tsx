import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Dimensions, Platform, Keyboard } from 'react-native'
import { Button, Chip, Surface, Text, TextInput, useTheme, Snackbar } from 'react-native-paper'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useSQLiteContext } from 'expo-sqlite';
import * as Crypto from 'expo-crypto'
import { router } from 'expo-router';

import Locales from '@/locales'
import { TableName } from '@/utils';
import { addCotisation } from '@/utils/database'

const { height } = Dimensions.get("window")

function AddContri() {
  const theme = useTheme()
  const db = useSQLiteContext()
  const [showDatePicker, setShowDatePicker] = React.useState(false)
  const [showButtonAdd, setShowButtonAdd] = React.useState(true)
  const [showSnackMessage, setShowSnackMessage] = React.useState(false)
  const [datePicker, setDatePicker] = React.useState(new Date())

  const [montant, setMontant] = useState("")
  const [recepteur, setRecepteur] = useState("")
  const [description, setDescription] = useState("")

  const resetInputs = () => {
    setMontant("")
    setRecepteur("")
    setDatePicker(new Date())
    setDescription("")
  }

  const validateAndSaveInfo = async () => {
    const _montant = montant
    const _recepteur = recepteur
    const _date_reception = datePicker.toString()
    const _description = description
    resetInputs()
    await addCotisation(db, TableName, {
      uid: Crypto.randomUUID(),
      montant: _montant,
      recepteur: _recepteur,
      date: _date_reception,
      description: _description
    })
    setShowSnackMessage(true)
    router.push("/(tabs)")
  }

  React.useEffect(() => {
    const showKeyboardListener = Keyboard.addListener("keyboardDidShow", () => {
      setShowButtonAdd(false)
    })
    const didKeyboardListener = Keyboard.addListener("keyboardDidHide", () => {
      setShowButtonAdd(true)
    })
    return () => {
      showKeyboardListener.remove()
      didKeyboardListener.remove()
    }
  }, [])

  const onChangeDate = (e: DateTimePickerEvent, date: Date | undefined) => {
    if (date) setDatePicker(date)
    setShowDatePicker(false)
  }

  return (
    <Surface
      style={{
        flex: 1,
        gap: 20,
        padding: 10,
        // justifyContent: 'space-around',
      }}
    >
      <Text variant="headlineLarge" style={{ textAlign: "center" }}>{Locales.t("titleAddContri")}</Text>

      <Surface
        style={{
          paddingHorizontal: 10,
          gap: 20,
          height: height / 2,
          justifyContent: "center"
        }}
      >
        <TextInput
          placeholder='Montant à cotisé'
          keyboardType='number-pad'
          value={montant}
          onChangeText={setMontant}
        />
        <TextInput
          placeholder="Nom du récepteur"
          value={recepteur}
          onChangeText={setRecepteur}
          keyboardType="email-address"
        />
        <Surface
          style={{
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Chip 
            style={{ width: "70%", justifyContent: "center" }} 
            textStyle={{ textAlign: "center", textAlignVertical: "center" }}
          >
            {datePicker.toLocaleDateString()}
          </Chip>
          <Button onPress={() => setShowDatePicker(true)}>Modifier</Button>
        </Surface>
        {showDatePicker &&
          <DateTimePicker
            display="spinner"
            value={datePicker}
            onChange={onChangeDate}
            accentColor={theme.colors.primary}
            textColor={theme.colors.secondary}
            themeVariant={"dark"}
            maximumDate={new Date()}
            timeZoneName='Africa/Lubumbashi'
            dateFormat="day month year"
            placeholderText="Selectioner une date"
            is24Hour={true}
            positiveButton={{ label: "Okay", textColor: theme.colors.primary }}
            negativeButton={{ label: "Annuler", textColor: theme.colors.error }}
            style={{
              backgroundColor: "red"
            }}
          />
        }
        <TextInput
          placeholder="Ajouter une description"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={5}
          style={{
            textAlignVertical: "top",
            textAlign: "left",
          }}
        />
      </Surface>
      
      <Button
        mode='contained'
        onPress={validateAndSaveInfo}
        style={{
          display: showButtonAdd ? "flex" : "none",
          marginHorizontal: 20,
          height: 50,
          justifyContent: "center",
          marginTop: 50,
        }}
        contentStyle={{ justifyContent: "center" }}
        labelStyle={{ fontWeight: "bold", fontSize: 18 }}
      >
        Ajouter
      </Button>
      <Surface style={{alignItems: "center"}}>
        <Snackbar
          visible={showSnackMessage}
          onDismiss={() => setShowSnackMessage(false)}
        >
          Cotisation ajouté. Veuillez patienter la confirmation de l'administrateur
        </Snackbar>
      </Surface>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </Surface>
  )
}

export default AddContri
