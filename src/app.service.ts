import { Injectable, Logger } from '@nestjs/common';
import { DailyData } from './entities/dailyData.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class AppService {
  constructor(
    @InjectRepository(DailyData)
    private readonly dailyDataRepository: Repository<DailyData>,
  ) {}
  
}
