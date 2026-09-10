import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service.js';

export interface Clase {
  id: number;
  nombre: string;
}

@Controller()
export class AppController {
  private clases: Clase[] = [
    { id: 1, nombre: 'Yoga' },
    { id: 2, nombre: 'Spinning' },
  ];

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('clases')
  listar(): Clase[] {
    return this.clases;
  }

  @Post('clases')
  crear(@Body() cuerpo: { nombre: string }): Clase {
    const nueva: Clase = { id: this.clases.length + 1, nombre: cuerpo.nombre };
    this.clases.push(nueva);
    return nueva;
  }
}

