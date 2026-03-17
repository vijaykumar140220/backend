import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<any>) {}

  async create(user) {
    try {
      console.log('Creating user:', user);
      const newUser = new this.userModel(user);
      return await newUser.save();
    } catch (error) {
      console.error('Mongo Error:', error); // ✅ shows exact error
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      console.log('Service FindOne:', id);
      return await this.userModel.findById(id);
    } catch (error) {
      console.error('FindOne Error:', error);
      throw error;
    }
  }

  async findAll() {
    return this.userModel.find();
  }

  async update(id: string, user) {
    return this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
