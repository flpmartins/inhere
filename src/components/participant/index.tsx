import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { IParticipantComponent } from '../../dtos/IParticipant'

export const Participant: React.FC<IParticipantComponent> = ({
  name,
  onDelete,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={onDelete}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}
