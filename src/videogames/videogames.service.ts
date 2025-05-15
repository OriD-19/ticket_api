import { Injectable } from '@nestjs/common';


@Injectable()
export class VideogamesService {
  private videogames: any[] = [];

  create(videogame: any) {
    this.videogames.push(videogame);
    return { message: 'Videojuego registrado', videogame };
  }

  findAll() {
    return this.videogames;
  }
}
