export interface createCita {
  id?:            number;
  nombrePaciente: string;
  nombreMedico:   string;
  especialidad:   string;
  descripcion:    string;
  date:           string;
  time:           string;
  medico?:      number;
  paciente?:    number;
}
