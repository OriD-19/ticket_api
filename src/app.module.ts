import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrintTicketModule } from './Print_ticket/Print_ticket.module';

@Module({
  imports: [PrintTicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
