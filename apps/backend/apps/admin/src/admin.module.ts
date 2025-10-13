import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { CourseModule } from './course/course.module';
import { MajorModule } from './major/major.module';
import { PrismaModule } from '@libs/prisma';
import { SharedConfigModule } from '@libs/config';

@Module({
  imports: [SharedConfigModule, CourseModule, MajorModule, PrismaModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
