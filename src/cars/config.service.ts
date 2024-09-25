import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SomeService {
  constructor(private configService: ConfigService) {
    const someConfigValue = this.configService.get<string>('SOME_CONFIG_KEY');
  }
}
