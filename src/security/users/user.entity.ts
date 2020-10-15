import mongoose, { Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<IUser>('user', userSchema, 'users');

export default User;
