import { addCotisation } from '@/utils/database';
import * as React from 'react';
import { Button, Dialog, Portal, Text } from 'react-native-paper';

interface DialogDeleteCotisationType {
  visible: boolean;
  setVisible: (e: boolean) => void;
  uid: string;
  onConfirm: (uid: string) => void;
}

const DialogDeleteCotisation = ({visible, setVisible, onConfirm, uid}: DialogDeleteCotisationType) => {

  const hideDialog = () => setVisible(false);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Attention</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">Voulez-vous supprimer ce cotisation?</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Annuler</Button>
          <Button 
            mode='contained'
            onPress={
            () => {
              hideDialog()
              onConfirm(uid)
            }}
          >
            Confirmer
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogDeleteCotisation;