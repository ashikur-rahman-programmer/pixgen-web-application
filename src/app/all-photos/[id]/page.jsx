import { fetchData } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const PhotoDetails = async ({ params }) => {
  const { id } = await params;

  const photos = await fetchData();
  const photo = photos.find((photo) => photo.id === parseInt(id));

  // console.log(id);

  return (
    <div className=" container mx-auto py-8">
      <div className="border rounded-xl p-4 text-center space-y-3">
        <h1>{photo?.title}</h1>
        <p>{photo.prompt}</p>
        <Link href={`/all-photos`}>
          <Button variant="secondary">Back to All Photos</Button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoDetails;
