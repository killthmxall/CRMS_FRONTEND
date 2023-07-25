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
  id: number,
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
