import { Module } from '@nestjs/common';
import { VideogamesController } from './videogames.controller';
import { VideogamesService } from './videogames.service';

@Module({
  controllers: [VideogamesController],
  providers: [VideogamesService]
})
export class VideogamesModule {}
