import Photo from "@/models/Photo";

export default function PhotoGridItem({ photo }: PhotoGridItemProps) {
  return <div>{JSON.stringify(photo)}</div>;
}

export type PhotoGridItemProps = {
  photo: Photo;
};
