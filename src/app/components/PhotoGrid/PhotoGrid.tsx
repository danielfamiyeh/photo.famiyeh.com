import Photo from "@/models/Photo";

export default function PhotoGrid(props: PhotoGridProps) {
  return <div className="photo-grid border-2 border-slate-400"></div>;
}

export type PhotoGridProps = {
  photos: Photo[];
};
