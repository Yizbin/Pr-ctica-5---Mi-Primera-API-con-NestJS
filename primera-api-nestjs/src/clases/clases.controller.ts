import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClasesService, ClaseGimnasio } from './clases.service';

@Controller('clases')
export class ClasesController {
  constructor(private readonly clasesService: ClasesService) {}

  @Get()
  listar(): ClaseGimnasio[] {
    return this.clasesService.listar();
  }

  @Post()
  crear(@Body() clase: Omit<ClaseGimnasio, 'id'>): ClaseGimnasio {
    return this.clasesService.crear(clase);
  }
}