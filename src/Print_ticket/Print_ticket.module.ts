import { Module } from '@nestjs/common';
import { TicketController } from './Print_ticket.controller';
import { TicketService } from './Print_ticket.service';

@Module({
  controllers: [TicketController],
  providers: [TicketService],
})
export class PrintTicketModule {}
