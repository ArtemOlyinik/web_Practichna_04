import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AutoPartsModule } from './auto-parts/auto-parts.module.js';

@Module({
  imports: [AutoPartsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
