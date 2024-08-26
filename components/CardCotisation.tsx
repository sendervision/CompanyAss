
import { Card, Avatar, IconButton, useTheme, Text, Surface } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { View } from 'react-native'

import { Cotisation } from "@/types/Cotisation";

interface CardCotisationType {
  cotisation: Cotisation,
  deleteCotisation: (uid: string) => void
}

function CardCotisation({ cotisation, deleteCotisation }: CardCotisationType) {
  const theme = useTheme()

  return (
    <Card
      style={{
        backgroundColor: theme.colors.secondaryContainer,
        marginVertical: 5,
      }}
    >
      <Card.Content
        style={{}}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text
            style={{
              fontSize: 40,
              textAlignVertical: "center",
              color: theme.colors.secondary,
              fontWeight: "bold",
            }}
          >
            <FontAwesome name="dollar" size={40} color={theme.colors.secondary} />
            {cotisation.montant}
          </Text>
          <IconButton 
            icon="delete" 
            size={30}
            onPress={() => deleteCotisation(cotisation.uid)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold"
              }}
            >
              {cotisation.recepteur}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: theme.colors.outline,
              }}
            >
              {
                cotisation.description.length > 30
                ? cotisation.description.slice(0, 30) + "..."
                : cotisation.description
              }
            </Text>
          </View>
          <Text
            style={{
              textAlignVertical: "bottom",
              fontSize: 14,
              color: theme.colors.primary,
              fontWeight: "bold",
            }}
          >
            {new Date(cotisation.date).toLocaleDateString()}
          </Text>
        </View>
      </Card.Content>
    </Card>
  )
}

export { CardCotisation }
