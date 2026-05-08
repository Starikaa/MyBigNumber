import { Controller, Get } from '@nestjs/common';
import { MyBigNumber } from './my-big-number/my-big-number.service';

@Controller()
export class AppController {
  constructor(private readonly myBigNumberService: MyBigNumber) { }

  @Get()
  getHello(): string {
      const result = this.myBigNumberService.sum("647291312", "987654321");
    return `Kết quả là: ${result}. Hãy xem chi tiết các bước cộng trong Terminal/Console!`;
  }
}