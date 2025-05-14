import { Injectable, NotFoundException } from '@nestjs/common';
import { FoodOrder, FoodStatus } from './food_order.model';

@Injectable()
export class FoodStatusService {
    private orders: FoodOrder[] = [
        {
            id: 1,
            food: 'Pizza',
            status: FoodStatus.PENDIENTE,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ];
    private idCounter = 2;

    findAll() {
        return this.orders;
    }

    findOne(id: number) {
        const order = this.orders.find(order => order.id === id);
        if (!order) {
            throw new NotFoundException(`Orden no encontrada con ID: ${id}`);
        }
        this.advanceOrderStatus(order);
        return order;
    }

    create(food: string) {
        // Tlas ordenes deben comenzar con estado pendiente, independientemente del estado que se le asigne al crear la orden
        const newOrder: FoodOrder = {
            id: this.idCounter++,
            food,
            status: FoodStatus.PENDIENTE,
            //fechas para corroborar la secuencia de la orden
            createdAt: new Date(),
            updatedAt: new Date()
        };

        this.orders.push(newOrder);
        return newOrder;
    }

    private advanceOrderStatus(order: FoodOrder) {
    // cambio de estado de la orden dependiendo de el 'get' que se haga?
    switch (order.status) {
      case FoodStatus.PENDIENTE:
        order.status = FoodStatus.PREPARANDO;
        break;
      case FoodStatus.PREPARANDO:
        order.status = FoodStatus.ENTREGADO;
        break;
      // si ya está en ENTREGADO, se mantiene en ese estado
    }
    
    // actualiza la fecha de la orden, para corroborar la secuencia
    order.updatedAt = new Date();
  }
}