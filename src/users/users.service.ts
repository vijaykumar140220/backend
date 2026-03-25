import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<any>) {}

  // 🛠 Helper function to format strings (e.g., "delhi" -> "Delhi")
  private formatData(data: any) {
    const fieldsToFormat = ['from', 'to', 'reason', 'serviceState', 'remarks'];

    fieldsToFormat.forEach((field) => {
      if (data[field] && typeof data[field] === 'string') {
        data[field] = 
          data[field].charAt(0).toUpperCase() + 
          data[field].slice(1).toLowerCase();
      }
    });
    return data;
  }

  // ✅ Optimized Bulk Insert
  async bulkCreate(users: any[]) {
    try {
      // Format every user in the array before insertion
      const formattedUsers = users.map((user) => this.formatData(user));
      return await this.userModel.insertMany(formattedUsers);
    } catch (error) {
      throw error;
    }
  }

  async create(user: any) {
    const formattedUser = this.formatData(user);
    const newUser = new this.userModel(formattedUser);
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
      const formattedUser = this.formatData(user);
      const updated = await this.userModel.findByIdAndUpdate(id, formattedUser, {
        returnDocument: 'after', 
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