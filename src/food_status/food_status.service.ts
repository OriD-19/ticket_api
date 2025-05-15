import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { FoodStatus } from './food_order.model';

@Injectable()
export class FoodStatusService {
  private readonly statusOrder = [FoodStatus.PENDIENTE, FoodStatus.PREPARANDO, FoodStatus.ENTREGADO]

  private orders = [
    {
      id: 1,
      food: 'Pizza',
      status: FoodStatus.PENDIENTE,
    }
  ];
  private idCounter = 2;

  findAll() {
    return this.orders;
  }

  findById(id: number) {
    const order = this.orders.find(order => order.id === id);
    if (!order) {
      throw new NotFoundException(`Orden no encontrada con ID: ${id}`);
    }
    return order;
  }

  create(food: string) {
    // Tlas ordenes deben comenzar con estado pendiente, independientemente del estado que se le asigne al crear la orden
    const newOrder = {
      id: this.idCounter++,
      food,
      status: this.statusOrder[0], // el estado desde el flujo dde secuencia para estados
    };

    this.orders.push(newOrder);
    return newOrder;
  }

  //para actualizar el estado de una orden en especifico siguiendo el orden de estados
  updateOrder(id: number, newStatus: string) {
    const order = this.findById(id);
    
    if (!this.statusOrder.includes(newStatus as FoodStatus)) {
      throw new BadRequestException(`Estado inválido: ${newStatus}`);
    }

    const currentIndex = this.statusOrder.indexOf(order.status);
    const newIndex = this.statusOrder.indexOf(newStatus as FoodStatus); 

    // valida el estado segun el orden que lleva la orden
    if (newIndex !== currentIndex + 1) {
      throw new BadRequestException(`No se puede cambiar el estado de ${order.status}, transición inválida a ${newStatus}`);
    }

    order.status = newStatus as FoodStatus;
    return order;
  }
}