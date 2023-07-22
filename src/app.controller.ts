import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Redirect,
  Req,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller({})
export class AppController {
  // 1. handling GET Request
  /*@Get()
  getUser() {
    return {
      name: 'Haikel',
      country: 'Indonesia',
      province: 'Bangka Belitung',
    };
  }*/

  // 2. handling POST Requests
  @Post()
  store(@Req() req: Request) {
    return req.body;
  }

  // 3. dynamic routing with route parameters
  @Get('/:userId')
  getUser(@Param() userId: number) {
    return userId;
  }

  // 4. handling asynchronous requests
  // cara 1: dengan async keyword
  /*@Get()
  async findAll(): Promise<any[]> {
    return [];
  }*/

  // cara 2: dengan rxjs observable
  @Get()
  findAll(): Observable<any[]> {
    return of([
      {
        description:
          'Halo ini API yang saya buat. Pergi ke /user/:id untuk mendapatkan data!',
      },
    ]);
  }

  // 5. handling redirects
  @Get()
  @Redirect('https://haikel.app', 302)
  getSite() {
    return {
      url: 'https://github.com/haikelz',
    };
  }

  // 6. returning status code
  @Post()
  @HttpCode(204)
  create() {
    return 'This action adds a new user to the app!';
  }

  // 7. handling DELETE Requests
  @Delete('/:userId')
  delete(@Param() params: { userId: number }) {
    return params;
  }

  // 8. handling UPDATE Requests
  @Patch('/:userId')
  update(@Req() req: Request) {
    return req.body;
  }
}
