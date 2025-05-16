import { Body, Controller, Get, Post, BadRequestException } from '@nestjs/common';
import { VideogamesService } from './videogames.service';

@Controller('videogames')
export class VideogamesController {
  constructor(private readonly videogamesService: VideogamesService) {}

  @Post()
  create(@Body() body: any) {
    const { name, genre, year } = body;

    if (!name || name.length < 4) {
      throw new BadRequestException('El nombre debe tener al menos 4 caracteres');
    }
    if (!genre || typeof genre !== 'string') {
      throw new BadRequestException('El género es requerido y debe ser texto');
    }
    if (!year || isNaN(year) || Number(year) < 1950) {
      throw new BadRequestException('Año inválido. Debe ser un número mayor a 1950');
    }

    const videogame = { name, genre, year: Number(year) };
    return this.videogamesService.create(videogame);
  }

  @Get()
  findAll() {
    return this.videogamesService.findAll();
  }
}
