import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '@generated';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async getUser(
    @Args('userId', { type: () => Int })
    userId: number,
  ) {
    return await this.userService.getUser(userId);
  }

  @Mutation(() => User)
  async signUp(
    @Args('studentId', { type: () => String })
    studentId: string,
    @Args('password', { type: () => String })
    password: string,
    @Args('majorId', { type: () => Int })
    majorId: number,
    @Args('semester', { type: () => Int })
    semester: number,
  ) {
    return await this.userService.signUp({
      studentId,
      password,
      majorId,
      semester,
    });
  }
}
