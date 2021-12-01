import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Cron } from '@nestjs/schedule';

@Controller('projects')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Cron('*/30 * * * *')
  async emailSending() {
    const chicagoTime = new Date().toLocaleTimeString('en-US', {
      timeZone: 'America/Chicago',
    });
    const newYorkTime = new Date().toLocaleTimeString('en-US', {
      timeZone: 'America/New_York',
    });
    const singaporeTime = new Date().toLocaleTimeString('en-US', {
      timeZone: 'Asia/Singapore',
    });
    const kolkataTime = new Date().toLocaleTimeString();
    const mailSendingTime = '6:00:00 am';
    if (chicagoTime === mailSendingTime) {
      await this.appService.emailSending('Chicago');
    }
    if (newYorkTime === mailSendingTime) {
      await this.appService.emailSending('Newyork');
    }
    if (singaporeTime === mailSendingTime) {
      await this.appService.emailSending('Singapore');
    }
    if (kolkataTime === mailSendingTime) {
      await this.appService.emailSending('Kolkata');
    }
  }
}
