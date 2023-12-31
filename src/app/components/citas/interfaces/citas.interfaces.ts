export interface Citas {
  query_type: String,
  query_description: String,
  cite: String,
  number_cite: String,
  consulting_room: String,
  horary: Date,
  date: Date,
  state: String,
  pacient: String,
  medic: String,
  assistant: String,
  observations: String,
  register_by: number,
  created_date: Date
}

export interface UpdateCitas {
  id_cite: number,
  query_type: String,
  query_description: String,
  site: String,
  number_cite: String,
  consulting_room: String,
  horary: string,
  state: String,
  id_pacient: String,
  id_medic: String,
  assistant: String,
  observations: String,
  register_by: number,
  created_date: Date
}

export interface CitasList{
  id_cite: number,
  query_type: String,
  query_description: String,
  cite: String,
  number_cite: String,
  consulting_room: String,
  horary: Date,
  date: Date,
  state: String,
  pacient: String,
  Medic: String,
  assistant: String,
  observations: String,
  register_by: number,
  created_date: Date
}
