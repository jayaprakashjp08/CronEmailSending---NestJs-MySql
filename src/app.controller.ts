import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { Cron } from '@nestjs/schedule';
var scraper = require('table-scraper');

@Controller('projects')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Cron('0 10 * * *')
  async handleCron() {
    scraper
      .get('http://www.cmdalayout.com/CommodityRate/CommodityRateToday.aspx')
      .then(async (tableData) => {
        await this.appService.storeDetails(tableData[0]);
      });
  }
}
