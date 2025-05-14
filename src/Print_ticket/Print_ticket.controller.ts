import { Body, Controller, Post, Res } from "@nestjs/common";
import { application, Response } from "express";
import { TicketService } from "./Print_ticket.service";


@Controller('ticket')
export class TicketController{
    constructor(private readonly ticketService: TicketService){}

    @Post('generate')
    async generateTicket(@Body() body:any, @Res() res:Response)
    {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename=ticket.pdf');
        await this.ticketService.generatePDF(body,res);
    }
}