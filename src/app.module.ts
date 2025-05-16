import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { FoodStatusController } from './food_status/food_status.controller';

@Module({
  imports: [TicketsModule, FoodStatusController],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
