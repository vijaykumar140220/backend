import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


// users.service.ts
@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<any>) {}

  // ✅ New Bulk Insert Method
  async bulkCreate(users: any[]) {
    try {
      // insertMany is optimized for multiple records
      return await this.userModel.insertMany(users);
    } catch (error) {
      throw error;
    }
  }

  async create(user: any) {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async findAll() {
    // Sorted by date (ascending) so new entries show at the bottom
    return await this.userModel.find().sort({ date: 1 });
  }
  
  async findOne(id: string) {
    return await this.userModel.findById(id);
  }

  async update(id: string, user: any) {
    try {
      const updated = await this.userModel.findByIdAndUpdate(id, user, {
        returnDocument: 'after', // ✅ fix warning
      });

      return updated;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}