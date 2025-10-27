import { Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaService } from '@libs/prisma';
import {
  DuplicateFoundException,
  EntityNotExistException,
} from '@libs/exceptions';
import * as bcrypt from 'bcrypt';

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

  async hashPassword(password: string) {
    const saltRounds = 10;
    const pepper = process.env.PEPPER;

    if (!pepper) {
      throw new EntityNotExistException('pepper does not exist');
    }

    const hashedPassword = await bcrypt.hash(password + pepper, saltRounds);
    return hashedPassword;
  }

  async comparePassword(
    password: string,
    storedHash: string,
  ): Promise<boolean> {
    const pepper = process.env.PEPPER;

    if (!pepper) {
      throw new EntityNotExistException('pepper does not exist');
    }

    return bcrypt.compare(password + pepper, storedHash);
  }

  async signUp({
    studentId,
    password,
    majorId,
    semester,
  }: {
    studentId: string;
    password: string;
    majorId: number;
    semester: number;
  }) {
    const user = await this.prisma.user.count({
      where: {
        studentId,
      },
    });

    if (user !== 0) {
      throw new DuplicateFoundException('user already exist');
    }

    const hashedPW = await this.hashPassword(password);

    return await this.prisma.user.create({
      data: {
        studentId,
        password: hashedPW,
        majorId,
        semester,
      },
    });
  }

  async login({
    studentId,
    password,
  }: {
    studentId: string;
    password: string;
  }) {
    const user = await this.prisma.user.findUnique({
      where: {
        studentId,
      },
      select: {
        password: true,
      },
    });

    if (!user) {
      throw new EntityNotExistException('user does not exist');
    }

    const isCorrectPW = await this.comparePassword(password, user.password);

    if (!isCorrectPW) {
      throw new NotAcceptableException('password is not identified');
    }

    return await this.prisma.user.update({
      where: {
        studentId,
      },
      data: {
        lastLogin: new Date(),
      },
    });
  }
}
