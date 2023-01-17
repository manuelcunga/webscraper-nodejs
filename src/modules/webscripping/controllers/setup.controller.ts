import { Controller, Get } from '@nestjs/common';
import { SetupService } from '../services/setup.service';

@Controller('/')
export class SetupController {
  constructor(private setup: SetupService) {}

  @Get()
  getHello(): string {
    return this.setup.Setup();
  }
}
