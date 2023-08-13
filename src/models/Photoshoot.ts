import { prop, getModelForClass, mongoose } from "@typegoose/typegoose";
import ProseContent from "./prose/ProseContent";

export default class Photoshoot {
  @prop({ required: true })
  public title!: string;

  @prop({ required: true })
  public description!: string;

  @prop({ required: true, type: () => [ProseContent] })
  public proseContent!: ProseContent[];

  @prop()
  public startedAt?: string;

  @prop()
  public endedAt?: string;
}

export const PhotoshootModel =
  mongoose.models.Photoshoot ?? getModelForClass(Photoshoot);
