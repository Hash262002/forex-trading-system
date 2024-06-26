import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * Returns a greeting message.
   * @returns {string} The greeting message.
   */
  getHello(): string {
    return 'This is forex backend application!';
  }
}
