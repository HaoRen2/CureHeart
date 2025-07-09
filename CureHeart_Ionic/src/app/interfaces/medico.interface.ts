export interface Medico {
  id:              number;
  nombre:          string;
  apellido1:       string;
  apellido2:       string;
  genero:          string;
  telefono:        string;
  especialidad:    string;
  fechaNacimiento?: Date;
  userEmail:       string;
  citas:           Cita[];
  horario:         Horario;
}

export interface CreateMedico {
  id:              number;
  nombre:          string;
  apellido1:       string;
  apellido2:       string;
  genero:          string;
  telefono:        string;
  especialidad:    string;
  fechaNacimiento: Date;
  userEmail:       string;
  citas:           Cita[];
  horario:        Horario;
}

export interface Cita {
  id?:             number;
  nombrePaciente: string;
  nombreMedico:   string;
  especialidad:   string;
  descripcion:    string;
  date:           Date;
  time:           string;
  cumplido:       boolean;
}

export interface Horario {
  id:         number;
  horaInicio: string;
  horaFin:    string;
}

export interface CreateMedico {
  id: number,
  token: string,
  email:string,
  role:string
}
