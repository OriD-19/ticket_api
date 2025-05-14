import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodStatusService {
    private orders = [
        { id: 1, food: 'Pizza', status: 'Pendiente' }
    ];

    findAll() {
        return this.orders;
    }

    findOne(id: number) {
        const order = this.orders.find(order => order.id === id);
        if (!order) {
            throw new Error(`Order with id ${id} not found`);
        }
        return order;
    }

    create(foodStatus: { id: number, food: string; status: string }) {
        this.orders.push(foodStatus);
        return foodStatus;
    }
}
