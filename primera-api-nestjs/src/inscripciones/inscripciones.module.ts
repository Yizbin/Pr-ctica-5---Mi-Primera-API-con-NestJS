import { Module } from '@nestjs/common';
import { InscripcionesController } from './inscripciones.controller';
import { InscripcionesService } from './inscripciones.service';
import { INSCRIPCION_REPOSITORY } from './inscripciones.tokens';
import { InscripcionRepositoryEnMemoria } from './dominio/inscripcion.repositorio-memoria';

@Module({
  controllers: [InscripcionesController],
  providers: [
    InscripcionesService,
    {
      provide: INSCRIPCION_REPOSITORY,
      useClass: InscripcionRepositoryEnMemoria,
    },
  ],
})
export class InscripcionesModule {}