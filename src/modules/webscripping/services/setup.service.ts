import { Injectable } from '@nestjs/common';

@Injectable()
export class SetupService {
  Setup(): string {
    return 'Bem vindo a api, webscriping products!';
  }
}
