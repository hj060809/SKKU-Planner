import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { CourseModule } from './course/course.module';
import { MajorModule } from './major/major.module';
import { ScheduleModule } from './schedule/schedule.module';
import { RegistrationModule } from './registration/registration.module';
import { PrismaModule } from '@libs/prisma';
import { UserModule } from './user/user.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { apolloErrorFormatter } from '@libs/exceptions';
import { SharedConfigModule } from '@libs/config';

@Module({
  imports: [
    SharedConfigModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'scheme.gql',
      sortSchema: true,
      introspection: true,
      formatError: apolloErrorFormatter,
    }),
    PrismaModule,
    CourseModule,
    MajorModule,
    ScheduleModule,
    RegistrationModule,
    UserModule,
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
