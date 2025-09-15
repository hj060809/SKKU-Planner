import { Injectable } from '@nestjs/common';
import { PrismaService } from '@libs/prisma';
import { EntityNotExistException } from '@libs/exceptions';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUser(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (user == null) {
      throw new EntityNotExistException('User');
    }

    return user;
  }
}
