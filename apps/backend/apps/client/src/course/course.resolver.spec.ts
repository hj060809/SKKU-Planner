import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@libs/prisma';
import { CourseResolver } from './course.resolver';
import { CourseService } from './course.service';

describe('CourseResolver', () => {
  let resolver: CourseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, CourseResolver, CourseService],
    }).compile();

    resolver = module.get<CourseResolver>(CourseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
