import { Controller, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller({})
@Injectable()
export class UserService {
  get() {
    return {
      description:
        'Halo ini API yang saya buat. Pergi ke /user/:id untuk mendapatkan data!',
    };
  }

  getUser(userId: number) {
    return { userId };
  }

  create(req: Request) {
    return req.body;
  }

  update(updateUserDto: UpdateUserDto, userId: number) {
    return { body: updateUserDto, userId };
  }

  delete(userId: number) {
    return userId;
  }
}
