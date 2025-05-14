import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodStatusController } from './food_status/food_status.controller';
import { FoodStatusService } from './food_status/food_status.service';

@Module({
  imports: [],
  controllers: [AppController, FoodStatusController],
  providers: [AppService, FoodStatusService],
})
export class AppModule {}
