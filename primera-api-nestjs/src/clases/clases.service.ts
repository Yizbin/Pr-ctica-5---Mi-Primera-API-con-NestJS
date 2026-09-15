import { Injectable } from '@nestjs/common';

export interface ClaseGimnasio {
  id: number;
  nombre: string;
  instructor: string;
  cupo: number;
}

@Injectable()
export class ClasesService {
  private clases: ClaseGimnasio[] = [
    { id: 1, nombre: 'Spinning', instructor: 'Carlos', cupo: 20 },
    { id: 2, nombre: 'Yoga', instructor: 'Laura', cupo: 15 },
  ];

  listar(): ClaseGimnasio[] {
    return this.clases;
  }

  crear(clase: Omit<ClaseGimnasio, 'id'>): ClaseGimnasio {
    const nuevaClase = { id: this.clases.length + 1, ...clase };
    this.clases.push(nuevaClase);
    return nuevaClase;
  }
}