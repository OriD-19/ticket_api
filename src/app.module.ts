import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventosController } from './eventos/eventos.controller';
import { EventosService } from './eventos/eventos.service';

@Module({
  imports: [],
  controllers: [AppController, EventosController],
  providers: [AppService, EventosService],
})
export class AppModule {}
