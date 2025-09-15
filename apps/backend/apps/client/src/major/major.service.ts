import { PrismaService } from '@libs/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MajorService {
  constructor(private prisma: PrismaService) {}

  async getMajors() {
    const majors = await this.prisma.major.findMany({
      select: {
        id: true,
        college: {
          select: {
            id: true,
            campus: true,
            collegeName: true,
          },
        },
        majorName: true,
      },
    });
    return majors;
  }
}
