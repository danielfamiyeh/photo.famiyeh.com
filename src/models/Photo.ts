import { prop, getModelForClass, mongoose } from "@typegoose/typegoose";

export default class Photo {
  @prop({ required: true })
  public title!: string;

  @prop({ required: true })
  public src!: string;

  @prop()
  public description?: string;

  @prop()
  public photoshoot?: string;
}

export const PhotoModel = mongoose.models.Photo ?? getModelForClass(Photo);
