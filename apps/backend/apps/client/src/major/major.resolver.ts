import { Query, Resolver } from '@nestjs/graphql';
import { MajorService } from './major.service';
import { Major } from '@generated';

@Resolver(() => Major)
export class MajorResolver {
  constructor(private readonly majorService: MajorService) {}

  @Query(() => [Major])
  async getMajors() {
    return await this.majorService.getMajors();
  }
}
