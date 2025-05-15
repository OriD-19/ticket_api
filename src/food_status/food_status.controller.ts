import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { FoodStatusService } from './food_status.service';

@Controller('food-orders')
export class FoodStatusController {
    constructor(private readonly foodStatusService: FoodStatusService) { }

    @Get()
    getAllFoodStatus() {
        return this.foodStatusService.findAll();
    }

    //para ver las ordenes por id 
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.foodStatusService.findById(id);
    }

    //crear ordenes
    @Post()
    create(@Body() body: { food: string }) {
        return this.foodStatusService.create(body.food);
    }

    //actualizar el estado de la orden, de acuerdo a la secuencia de estados
    @Post(':id')
    updateOrder(@Param('id', ParseIntPipe) id: number, @Body() body: { status: string }) {
        return this.foodStatusService.updateOrder(id, body.status);
    }
}
