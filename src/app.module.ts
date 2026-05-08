import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MyBigNumberService } from './my-big-number/my-big-number.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MyBigNumberService],
})
export class AppModule { }
