import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { FAB } from 'react-native-paper';

interface FabButtonPlusType {
  onPress: (e: any) => void;
  style?: {string: string};
}

const FabButtonPlus = ({
  onPress,
  style,
}: FabButtonPlusType) => {

  return (
    <FAB
      icon={'plus'}
      onPress={onPress}
      style={[styles.fabStyle, style]}
    />
  );
};

export default FabButtonPlus;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});