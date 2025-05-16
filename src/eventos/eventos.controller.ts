import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { EventosService } from './eventos.service';

@Controller('eventos')
export class EventosController {
    constructor(private readonly eventosService: EventosService) {}
    @Post()
    registerUser(@Body() body: {nombre: string, evento: string}){
        return this.eventosService.registerUser(body.nombre, body.evento);
    }
    @Patch()
    updateAssistance(@Body() body: {nombre: string, ticket: string}){
        return this.eventosService.updateAssistance(body.nombre, body.ticket);
    }

    @Get()
    summaryAssistance(){
        return this.eventosService.summaryAssistance();
    }
}

