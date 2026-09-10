import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

export interface ClaseGimnasio {
  id: number;
  nombre: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private clases: ClaseGimnasio[] = [
    { id: 1, nombre: 'Spinning' },
    { id: 2, nombre: 'CrossFit' },
  ];

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('clases')
  obtenerClases(): ClaseGimnasio[] {
    return this.clases;
  }
  
  @Post('clases')
  crearClase(@Body() nuevaClase: ClaseGimnasio): ClaseGimnasio {
    this.clases.push(nuevaClase);
    return nuevaClase;
  }
}

