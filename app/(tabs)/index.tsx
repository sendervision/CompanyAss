import React, { useEffect, useState } from 'react'
import { Surface, Text, Chip, Divider } from 'react-native-paper'
import { FlatList } from 'react-native'
import { router, useFocusEffect } from "expo-router"
import { useSQLiteContext } from "expo-sqlite"

import Locales from '@/locales'
import { TableName } from '@/utils/index'
import { createTableCotisation, getAllCotisation, deleteCotisationByUUID } from '@/utils/database'
import { ContriNotFound, FabButtonPlus, DialogDeleteCotisation } from "@/components"
import { CardCotisation } from '@/components/CardCotisation'
import { Cotisation } from '@/types/Cotisation'


function TabsHome() {
  const db = useSQLiteContext()
  const [cotisations, setCotisations] = useState<Cotisation[]>([])
  const [visibleDialogDeleted, setVisibleDialogDelete] = useState(false)
  const [uidDeleted, setUidDeleted] = useState("")

  useEffect(() => {
    (async () => {
      await createTableCotisation(db, TableName)
    })()
  }, [])

  useFocusEffect(() => {
    (async () => {
      await getCotisations()
    })()
  })

  const deleteCotisation = async (uid: string) => {
    await deleteCotisationByUUID(db, TableName, uid)
    getCotisations()
  }

  const viewAlertDelete = (uid: string) => {
    setVisibleDialogDelete(true)
    setUidDeleted(uid)
  }

  const getCotisations = async () => {
    const liste_cotisation = await getAllCotisation(db, TableName)
    setCotisations(liste_cotisation)
  }

  return (
    <Surface
      style={{
        flex: 1,
        gap: 16,
        paddingVertical: 5,
        alignItems: !cotisations[0]? 'center' : undefined,
        justifyContent: !cotisations[0]? 'center' : undefined,
      }}
    >
      {
        !cotisations[0]
        ? <ContriNotFound />
        : (
          <FlatList
            data={cotisations}
            keyExtractor={(item, index) => item.uid}
            style={{paddingHorizontal: 10}}
            renderItem={({item, index}) => (
              <CardCotisation 
                cotisation={item} 
                deleteCotisation={(uid) => viewAlertDelete(uid)}
              />
            )}
          />
        )
      }
      <DialogDeleteCotisation
        visible={visibleDialogDeleted}
        setVisible={setVisibleDialogDelete}
        uid={uidDeleted}
        onConfirm={deleteCotisation}
      />
      <FabButtonPlus
        // onPress={() => router.navigate("/cotisations/add_contri")}
        onPress={() => router.navigate("/auth")}
      />
    </Surface>
  )
}

export default TabsHome
