import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@libs/prisma';
import { ScheduleResolver } from './schedule.resolver';
import { ScheduleService } from './schedule.service';

describe('ScheduleResolver', () => {
  let resolver: ScheduleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, ScheduleResolver, ScheduleService],
    }).compile();

    resolver = module.get<ScheduleResolver>(ScheduleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
