export interface Cita {
  query_type: String,
  query_description: String,
  site: String,
  number_cite: String,
  consulting_room: String,
  horary: Date,
  id_pacient: Number,
  state: String,
  admin: String,
  assistant: String,
  observations: String,
  reminder_sent: Boolean,
  register_by: number,
  created_date: Date
}

export interface UpdateCita {
  id: number,
  query_type: String,
  query_description: String,
  site: String,
  number_cite: String,
  consulting_room: String,
  horary: Date,
  id_pacient: Number,
  state: String,
  admin: String,
  assistant: String,
  observations: String,
  reminder_sent: Boolean,
  register_by: number,
  created_date: Date
}

export interface CitaList{
  id_cite: number,
  query_type: String,
  query_description: String,
  site: String,
  number_cite: String,
  consulting_room: String,
  horary: Date,
  id_pacient: Number,
  state: String,
  admin: String,
  assistant: String,
  observations: String,
  reminder_sent: Boolean,
  register_by: number,
  created_date: Date
}
