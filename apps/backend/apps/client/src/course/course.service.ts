import { Injectable } from '@nestjs/common';
import { PrismaService } from '@libs/prisma';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}
}
