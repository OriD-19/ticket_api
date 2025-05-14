import { Test, TestingModule } from '@nestjs/testing';
import { FoodStatusService } from './food_status.service';

describe('FoodStatusService', () => {
  let service: FoodStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodStatusService],
    }).compile();

    service = module.get<FoodStatusService>(FoodStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
