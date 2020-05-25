import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
