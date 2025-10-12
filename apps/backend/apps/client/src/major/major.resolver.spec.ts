import { Test, TestingModule } from '@nestjs/testing';
import { MajorResolver } from './major.resolver';
import { MajorService } from './major.service';

describe('MajorResolver', () => {
  let resolver: MajorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MajorResolver, MajorService],
    }).compile();

    resolver = module.get<MajorResolver>(MajorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
