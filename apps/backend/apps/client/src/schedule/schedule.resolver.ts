import { Query, Resolver } from '@nestjs/graphql';
import { ScheduleService } from './schedule.service';

@Resolver()
export class ScheduleResolver {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Query(() => String)
  say(): string {
    return '';
  }
}
