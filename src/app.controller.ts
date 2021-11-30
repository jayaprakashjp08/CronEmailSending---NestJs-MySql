import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { Cron } from '@nestjs/schedule';
import axios from 'axios';
const fs = require('fs');
const htmlToJson = require('html-to-json');
var html_to_pdf = require('html-pdf-node');
const PDFParser = require('pdf2json');
var http = require('http');
var request = require('request');
import { zonedTimeToUtc } from 'date-fns-tz';

@Controller('projects')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/doLogin')
  @ApiTags('Users')
  public async get(): Promise<any> {
    const str = new Date().toLocaleString('en-US', {
      timeZone: 'America/Chicago',
    });
    const newDate = new Date(str);
    console.log(str, newDate);

    // var d = new Date(
    //   '2020-04-13T00:00:00.000+08:00',
    // ); /* midnight in China on April 13th */
    // d.toLocaleString('en-US', { timeZone: 'America/New_York' });
    // console.log(d);
    // let nz_date_string = new Date().toLocaleString("en-US", { timeZone: "Pacific/Chatham" });
  }

  // @Cron('*/10 * * * * *')
  // handleCron() {
  //   const opts = {
  //     url: 'http://www.cmdalayout.com/CommodityRate/CommodityRateToday.aspx',
  //   };
  //   request.get(opts, function (error, response, body) {
  //     //Handle error, and body
  //     console.log('response', response, 'body', body);
  //   });

  //   // let options = { format: 'A4' };
  //   // let file = [
  //   //   {
  //   //     url: 'http://www.cmdalayout.com/CommodityRate/CommodityRateToday.aspx',
  //   //     name: 'example.pdf',
  //   //   },
  //   // ];

  //   // html_to_pdf.generatePdfs(file, options).then(async (output) => {
  //   //   console.log('PDF Buffer:-', output); // PDF Buffer:- [{url: "https://example.com", name: "example.pdf", buffer: <PDF buffer>}]
  //   //   console.log(output[0].buffer.toJSON());
  //   //   await fs.writeFileSync('./pdf', output[0].buffer);
  //   //   // console.log('data', data);
  //   // });
  //   // var promise = htmlToJson.request(
  //   //   'http://www.cmdalayout.com/CommodityRate/CommodityRateToday.aspx',
  //   //   {
  //   //     images: [
  //   //       'img',
  //   //       function ($img) {
  //   //         return $img.attr('src');
  //   //       },
  //   //     ],
  //   //   },
  //   //   function (err, result) {
  //   //     console.log('hii');
  //   //     console.log(result);
  //   //   },
  //   // );

  //   // axios
  //   //   .get('http://www.cmdalayout.com/CommodityRate/CommodityRateToday.aspx', {
  //   //     headers: {
  //   //       authorization: 'Basic',
  //   //       'Content-Type': 'application/json',
  //   //     },
  //   //   })
  //   //   .then(async (data) => {
  //   //     // await fs.writeFileSync('/pdf', data);
  //   //     console.log('data', await data.request);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log('Error', error);
  //   //   });
  // }
}
