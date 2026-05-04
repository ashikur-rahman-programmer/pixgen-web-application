import PhotoCard from "@/components/shared/PhotoCard";
import { fetchCategories, fetchData } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";

const AllPhotosPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  const photos = await fetchData();
  const categories = await fetchCategories();
  const filteredPhotos = category
    ? photos.filter(
        (photo) => photo.category.toLowerCase() == category.toLowerCase(),
      )
    : photos;

  return (
    <div className="container mx-auto space-y-3 py-6">
      <h2 className="text-2xl font-semibold">All Photos</h2>

      {/* categories */}
      <div className="flex gap-3 items-center flex-wrap">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`?category=${category.name.toLowerCase()}`}
          >
            <Button variant="outline">{category.name}</Button>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
