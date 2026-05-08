import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MyBigNumber } from './my-big-number/my-big-number.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MyBigNumber],
})
export class AppModule { }
