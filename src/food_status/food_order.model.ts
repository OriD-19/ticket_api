//Uso de enums predefinidos para el estado de la orden

export enum FoodStatus {
  PENDIENTE = 'pendiente',
  PREPARANDO = 'preparando',
  ENTREGADO = 'entregado',
}

// definicion de las ordenes de comida
export interface FoodOrder {
  id: number;
  food: string;
  status: FoodStatus;
  createdAt: Date;
  updatedAt: Date;
}