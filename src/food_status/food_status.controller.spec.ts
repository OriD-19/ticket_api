import { Test, TestingModule } from '@nestjs/testing';
import { FoodStatusController } from './food_status.controller';

describe('FoodStatusController', () => {
  let controller: FoodStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodStatusController],
    }).compile();

    controller = module.get<FoodStatusController>(FoodStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
