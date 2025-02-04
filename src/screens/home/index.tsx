import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/participant'
import { IParticipant } from '../../dtos/IParticipant'
import { useState } from 'react'

export const Home = () => {
  const [name, setName] = useState('')
  const [participants, setParticipants] = useState<IParticipant[]>([])

  const onPress = async (name: string) => {
    if (!name.trim()) {
      return Alert.alert('Erro', 'O nome não pode estar vazio.')
    }

    const participantExists = await participants.some(
      (participant) => participant.name.toLowerCase() === name.toLowerCase(),
    )

    if (participantExists) {
      return Alert.alert(
        'Nome já em uso',
        'Escolha um nome diferente para o cadastro.',
      )
    }

    const newParticipant = { id: participants.length + 1, name } as IParticipant
    setName('')
    await setParticipants((prev: IParticipant[]) => [...prev, newParticipant])
    Alert.alert('Sucesso!', 'Participante adicionado com sucesso.')
  }

  const handleRemoveParticipant = (participant: IParticipant) => {
    setParticipants((prev) => prev.filter((p) => p.id !== participant.id))
    Alert.alert('Sucesso!', 'Participante deletado com sucesso.')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.subTitle}>Sexta, 5 de Novembro 2022</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome do participante."
          style={styles.input}
          placeholderTextColor={styles.inputPlaceHolder.color}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TouchableOpacity style={styles.button} onPress={() => onPress(name)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Participant
            name={item.name}
            onDelete={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View>
            <Text style={styles.emptyText}>
              Nenhum participante adicionado ainda.
            </Text>
            <Text style={styles.emptyText}>
              Adicione participantes para começar!
            </Text>
          </View>
        )}
      />
    </View>
  )
}
