import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { PrismaModule } from '@libs/prisma';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { apolloErrorFormatter } from '@libs/exceptions';
import { ClientResolver } from './client.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'scheme.gql',
      sortSchema: true,
      introspection: true,
      formatError: apolloErrorFormatter,
    }),
    PrismaModule,
  ],
  controllers: [ClientController],
  providers: [ClientResolver, ClientService],
})
export class ClientModule {}
