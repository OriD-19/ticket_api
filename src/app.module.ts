import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { PrintTicketModule } from './Print_ticket/Print_ticket.module';
import { VideogamesModule } from './videogames/videogames.module';
import { BooksModule } from './books/books.module';
import { EventosModule } from './eventos/eventos.module';
import { FoodOrderModule } from './food_status/food_order.module';

@Module({
  imports: [TicketsModule, FoodOrderModule, PrintTicketModule, BooksModule, VideogamesModule, EventosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
