import { getHeaderTitle } from '@react-navigation/elements'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import React from 'react'
import { Appbar, AppbarProps } from 'react-native-paper'

interface StackHeaderProps extends AppbarProps {
  navProps: NativeStackHeaderProps | any
}

function StackHeader( props: StackHeaderProps) {
  return (
    <Appbar.Header {...props}>
      {props.navProps.back ? (
        <Appbar.BackAction onPress={props.navProps.navigation.goBack} />
      ) : null}

      <Appbar.Content
        title={getHeaderTitle(props.navProps.options, props.navProps.route.name)}
      />
    </Appbar.Header>
  )
}

export default StackHeader
