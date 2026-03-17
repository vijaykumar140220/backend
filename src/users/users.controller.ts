import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('crud-operations')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() body) {
    console.log('Controller Hit', body);
    return this.usersService.create(body);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // ✅ GET BY ID (NEW)
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('Get by ID:', id); // debug
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.usersService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
