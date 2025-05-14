import { Module } from "@nestjs/common";
import { FoodStatusController } from "./food_status.controller";
import { FoodStatusService } from "./food_status.service";

@Module({
    imports: [],
    controllers: [FoodStatusController],
    providers: [FoodStatusService],
})

export class FoodOrderModule {}