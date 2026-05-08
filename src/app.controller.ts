import { Controller, Get } from '@nestjs/common';
import { MyBigNumberService } from './my-big-number/my-big-number.service';

@Controller()
export class AppController {
  constructor(private readonly myBigNumberService: MyBigNumberService) { }

  @Get()
  getHello(): string {
    // Chạy thử với 2 số bất kỳ
    const result = this.myBigNumberService.sum("123456789", "987654321");
    return `Kết quả là: ${result}. Hãy xem chi tiết các bước cộng trong Terminal/Console!`;
  }
}