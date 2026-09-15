import { Module } from '@nestjs/common';
import { ClasesModule } from './clases/clases.module';
import { InscripcionesModule } from './inscripciones/inscripciones.module';

@Module({
  imports: [ClasesModule, InscripcionesModule],
})
export class AppModule {}