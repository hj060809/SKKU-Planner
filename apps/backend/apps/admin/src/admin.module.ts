import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { CourseModule } from './course/course.module';
import { MajorModule } from './major/major.module';
import { PrismaModule } from '@libs/prisma';

@Module({
  imports: [CourseModule, MajorModule, PrismaModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
