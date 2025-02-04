export interface IParticipant {
  id: number
  name: string
}

export interface IParticipantComponent {
  name: string
  onDelete: () => void
}
