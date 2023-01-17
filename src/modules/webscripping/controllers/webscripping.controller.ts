import { Controller, Get } from '@nestjs/common';
import { WebScripperService } from '../services/webscripping.service';

@Controller('products')
export class WebscrippingController {
  constructor(private webScripping: WebScripperService) {}

  @Get()
  async findAll() {
    return this.webScripping.scripping();
  }
}
