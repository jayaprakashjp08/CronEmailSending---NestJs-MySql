import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './config/database.module';
import { DailyData } from './entities/dailyData.entity';
import { Users } from './entities/users.entity';
import { MailHistory } from './entities/mailHistory.entity';
import { ScheduleModule } from '@nestjs/schedule';
@Module({
  imports: [
    TypeOrmModule.forFeature([DailyData, Users, MailHistory]),
    DatabaseModule,
    ScheduleModule.forRoot(),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
