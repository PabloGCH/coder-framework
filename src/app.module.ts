import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import process from 'process';

@Module({
  imports: [ MongooseModule.forRoot(process.env.MONGO_URL) , ProductsModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
    constructor() {
        console.log("MONGO URL", process.env.MONGO_URL);
    }
}
