import Banner from "@/components/shared/Banner";
import PhotoCard from "@/components/shared/PhotoCard";
import { fetchData } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";

export default async function Home() {
  const photos = await fetchData();

  return (
    <div className="container mx-auto space-y-3 py-6 space-y-6">
      <Banner />
      <h2 className="text-2xl font-semibold">Top Generations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.slice(0, 8).map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
      <Link href={`/all-photos`}>
        <Button variant="secondary" className="mx-auto block">
          View All Photos
        </Button>
      </Link>
    </div>
  );
}
