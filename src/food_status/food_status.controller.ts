import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { FoodStatusService } from './food_status.service';

@Controller('food-orders')
export class FoodStatusController {
    constructor(private readonly foodStatusService: FoodStatusService) { }

    @Get()
    getAllFoodStatus() {
        return this.foodStatusService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.foodStatusService.findOne(id);
    }

    @Post()
    createFoodStatus(@Body() body: { id: number, food: string; status: string }) {
        return this.foodStatusService.create(body);
    }
}
