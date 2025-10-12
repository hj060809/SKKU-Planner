import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@libs/prisma';
import { RegistrationService } from './registration.service';

describe('RegistrationService', () => {
  let service: RegistrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, RegistrationService],
    }).compile();

    service = module.get<RegistrationService>(RegistrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
