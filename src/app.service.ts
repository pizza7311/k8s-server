import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHealthCheck(): string {
    return 'OK';
  }

  getTest(): string {
    return 'This is a new endpoint.';
  }
}
