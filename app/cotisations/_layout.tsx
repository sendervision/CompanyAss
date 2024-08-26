import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Stack, router } from 'expo-router'
import React from 'react'
import { Appbar, Tooltip } from 'react-native-paper'

import { TabBar, StackHeader } from '@/components'
import Locales from '@/locales'

const StackLayout = () => (
  <Stack
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name="add_contri"
      options={{
        title: Locales.t("titleAddContri"),
        headerTitle: Locales.t('titleAddContri')
      }}
    />
  </Stack>
)

export default StackLayout
