import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './config/database.module';
import { DailyData } from './entities/dailyData.entity';
import { ScheduleModule } from '@nestjs/schedule';
@Module({
  imports: [
    TypeOrmModule.forFeature([DailyData]),
    DatabaseModule,
    ScheduleModule.forRoot(),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
