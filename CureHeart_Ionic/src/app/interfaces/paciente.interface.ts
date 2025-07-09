export interface Paciente {
  id:              number;
  nombre:          string;
  apellido1:       string;
  apellido2:       string;
  genero:          string;
  telefono:        string;
  fechaNacimiento?: Date;
  citas:           Cita[];
  userEmail:       string;
}

export interface Cita {
  id?:            number;
  nombrePaciente: string;
  nombreMedico:   string;
  especialidad:   string;
  descripcion:    string;
  date:           Date;
  time:           string;
  cumplido:       boolean;
}
