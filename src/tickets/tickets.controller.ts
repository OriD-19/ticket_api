import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {

    constructor(private readonly ticketsService: TicketsService) {}

    @Get()
    getTickets() {
        return this.ticketsService.findAll();
    }

    @Post()
    createTicket(@Body() body : { price: number }) {
        return this.ticketsService.createTicket(body.price);
    }

    @Delete('expired')
    eraseExpiredTickets(@Query('maxExpireTime') maxExpireTime: number = 2) {
        // el tiempo de expiración debe estar expresado en minutos
        // tiempo por defecto es de 2 minutos
        const res = {
            deletedCount: this.ticketsService.deleteTicket(maxExpireTime),
        }

        return res;
    }

}
