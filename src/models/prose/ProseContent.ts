import { prop, getModelForClass, mongoose } from "@typegoose/typegoose";

export class ProseContentProp {
  @prop({ required: true })
  public key!: string;

  @prop({ required: true })
  public value!: string;

  @prop({ required: true, enum: ["string", "boolean", "number"] })
  public type!: string;
}

export default class ProseContent {
  @prop({ required: true, enum: ["text", "image"] })
  public type!: string;

  @prop({ type: () => [ProseContentProp] })
  public props?: ProseContentProp[];

  @prop({ type: () => [ProseContentProp] })
  public styles?: ProseContentProp[];
}

export const ProseContentModel =
  mongoose.models.ProseContent ?? getModelForClass(ProseContent);
