import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  pxeSerialNumber: string;

  // ✅ FIXED (STRING, NOT DATE)
  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  transactionType: string;

  @Prop({ required: true })
  from: string;

  @Prop({ required: true })
  to: string;

  @Prop({ required: true })
  reason: string;

  @Prop({ required: true })
  serviceState: string;

  @Prop()
  remarks: string;
}

export const UserSchema = SchemaFactory.createForClass(User);