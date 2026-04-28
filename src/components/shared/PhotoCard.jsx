import { Button, Chip, Separator } from "@heroui/react";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const PhotoCard = ({ photo }) => {
  // console.log(photo);
  return (
    <div className="border rounded-xl p-2 overflow-hidden">
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={photo.title}
          className="object-cover rounded-xl"
        />

        <Chip size="sm" className="absolute right-2 top-2">
          {photo.category}
        </Chip>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{photo.title}</h3>

        <div className="flex gap-5 py-2 text-gray-700">
          <div className="flex items-center gap-2">
            <p>
              <FaHeart />
            </p>
            <p>{photo.likes}</p>
          </div>

          <Separator orientation="vertical" />

          <div className="flex items-center gap-2">
            <p>
              <BiDownload />
            </p>
            <p>{photo.downloads}</p>
          </div>
        </div>

        <Link href={`/all-photos/${photo.id}`}>
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoCard;
