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
  async storeDetails(data: any) {
    const dailyData = [];
    const date = new Date();
    data.forEach((element) => {
      dailyData.push({
        itemName: element['Vegetable_2'],
        minPrice: element['Min.Rate/kg.'],
        maxPrice: element['Max.Rate/kg.'],
        date: date,
      });
    });
    await this.dailyDataRepository
      .save(dailyData)
      .then((data) => {
        Logger.log("Inserted all data's successfully");
      })
      .catch((error) => {
        Logger.log('Error occured while insertion');
      });
    console.log('data', dailyData);
  }
}
