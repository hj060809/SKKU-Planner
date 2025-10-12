import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@libs/prisma';
import { MajorService } from './major.service';

describe('MajorService', () => {
  let service: MajorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, MajorService],
    }).compile();

    service = module.get<MajorService>(MajorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
