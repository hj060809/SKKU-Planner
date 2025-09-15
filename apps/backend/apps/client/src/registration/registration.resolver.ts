import { Query, Resolver } from '@nestjs/graphql';
import { RegistrationService } from './registration.service';

@Resolver()
export class RegistrationResolver {
  constructor(private readonly registrationService: RegistrationService) {}

  @Query(() => String)
  say(): string {
    return '';
  }
}
