import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '@generated';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async getUser(
    @Args('userId', { type: () => Int, nullable: true })
    userId: number,
  ) {
    return await this.userService.getUser(userId);
  }
}
