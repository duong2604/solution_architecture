import { Module } from '@nestjs/common';
import { StudentsModule } from './modules/students.module';

@Module({
  imports: [StudentsModule],
})
export class AppModule {}
