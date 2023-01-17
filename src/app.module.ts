import { SetupService } from './modules/webscripping/services/setup.service';
import { SetupController } from './modules/webscripping/controllers/setup.controller';
import { WebscrippingController } from './modules/webscripping/controllers/webscripping.controller';
import { Module } from '@nestjs/common';
import { WebScripperService } from './modules/webscripping/services/webscripping.service';

@Module({
  imports: [],
  controllers: [SetupController, WebscrippingController],
  providers: [SetupService, WebScripperService],
})
export class AppModule {}
