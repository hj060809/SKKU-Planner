import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ClientResolver {
  @Query(() => String)
  ping(): string {
    return 'Client server is running!';
  }
}
