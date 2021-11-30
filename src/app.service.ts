import { Injectable, Logger } from '@nestjs/common';
const nodemailer = require('nodemailer');
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DailyData } from './entities/dailyData.entity';
import { Users } from './entities/users.entity';
import { MailHistory } from './entities/mailHistory.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    @InjectRepository(DailyData)
    private readonly dailyDataRepository: Repository<DailyData>,
    @InjectRepository(MailHistory)
    private readonly mailHistoryRepository: Repository<MailHistory>,
  ) {}

  async emailSending(location: string) {
    try {
      // console.log('location', location);
      const result = await this.usersRepository.find({
        select: ['userId', 'email'],
        where: { location: location },
      });

      console.log(result);
      const emails = [];
      const mailHistory = [];
      result.forEach((item) => {
        emails.push(item.email);
      });

      let transporter: any = nodemailer.createTransport({
        service: 'Gmail',
        port: 8000,
        secure: false,
        auth: {
          user: 'prakashjayajp08@gmail.com',
          pass: '********',
        },
      });

      await transporter
        .sendMail({
          from: '<prakashjayajp08@gmail.com>',
          to: emails,
          subject: 'Welcome',
          html: `<b>Good Morning</b><br>
        Have a nice day!!!
          `,
        })
        .then(async (data) => {
          Logger.log('Mail Sent Successfully', data);
          result.forEach((element) => {
            mailHistory.push({
              userId: element.userId,
              mailStatus: true,
              date: new Date(),
            });
          });
          await this.mailHistoryRepository.save(mailHistory);
        })
        .catch((error) => {
          Logger.log('Error occured while sending email', error);
        });
    } catch (error) {
      Logger.log(error);
      return {
        message: error,
        status: false,
      };
    }
  }
}
