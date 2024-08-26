import React from 'react'
import { Surface, Text, Chip, Divider } from 'react-native-paper'

import Locales from '@/locales'

const ContriNotFound = () => (
  <Surface
    style={{
      gap: 16,
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <Text variant="displaySmall" style={{ textAlign: "center" }}>{Locales.t("titleNotContri")}</Text>

    <Text variant="bodyLarge">{Locales.t('secondTitleNotContri')}</Text>

    <Chip textStyle={{ fontFamily: 'JetBrainsMono_400Regular' }}>
      {Locales.t("chipNotContri")}
    </Chip>

    <Text variant="bodyLarge" style={{ textAlign: 'center' }}>
      {Locales.t('descContri')}
    </Text>
  </Surface>
)

export default ContriNotFound
