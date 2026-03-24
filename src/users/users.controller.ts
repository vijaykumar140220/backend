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
import { log } from 'console';

@Controller('crud-operations')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('bulk')
  bulkCreate(@Body() body: any[]) {
    console.log('📦 Bulk Import API HIT:', body.length, 'records');
    return this.usersService.bulkCreate(body);
  }

  @Post()
  create(@Body() body) {
    console.log("vijay", body);
    
    return this.usersService.create(body);
  }

  @Get()
  findAll() {
    console.log('📤 Fetch All Users');
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('🔍 Get by ID:');
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    console.log("id",id)
    return this.usersService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    console.log("delete",id)
    return this.usersService.delete(id);
  }
}