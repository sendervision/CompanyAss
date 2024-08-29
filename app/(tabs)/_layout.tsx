import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Tabs, router, Redirect } from 'expo-router'
import React from 'react'
import { Appbar, Tooltip } from 'react-native-paper'
import { useAuth } from "@clerk/clerk-expo"

import { TabBar, TabsHeader } from '@/components'
import Locales from '@/locales'

const TabLayout = () => {
  const { isSignedIn } = useAuth()

  if (!isSignedIn){
    return Redirect({href: "/auth"})
  }

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        header: (props) => <TabsHeader navProps={props} children={undefined} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: Locales.t('titleHome'),
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              {...props}
              size={24}
              name={props.focused ? 'home' : 'home-outline'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: Locales.t('titleSettings'),
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              {...props}
              size={24}
              name={props.focused ? 'cog' : 'cog-outline'}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabLayout
