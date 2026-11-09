import { Module } from '@nestjs/common';
import { AutoPartsController } from './auto-parts.controller.js';
import { AutoPartsService } from './auto-parts.service.js';

@Module({
  controllers: [AutoPartsController],
  providers: [AutoPartsService]
})
export class AutoPartsModule {}
