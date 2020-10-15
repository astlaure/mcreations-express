import mongoose, { Document } from 'mongoose';

export interface IIllustration extends Document {
  url: string;
}

const illustrationSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
});

const Illustration = mongoose.model<IIllustration>('illustration', illustrationSchema, 'illustrations');

export default Illustration;
