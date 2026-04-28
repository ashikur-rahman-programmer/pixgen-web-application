import PhotoCard from "@/components/shared/PhotoCard";
import { fetchCategories, fetchData } from "@/lib/data";
import { Button } from "@heroui/react";

const AllPhotosPage = async () => {
  const photos = await fetchData();
  const categories = await fetchCategories();
  // console.log(categories);
  // console.log(photos);

  return (
    <div className="container mx-auto space-y-3 py-6">
      <h2 className="text-2xl font-semibold">All Photos</h2>
      <div className="flex gap-3 items-center flex-wrap">
        {categories.map((category) => (
          <Button key={category.id} variant="outline">
            {category.name}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
