import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Todo extends Document {
    @Prop()
    title: string;

    @Prop()
    desc: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);