import * as React from "react";
import { ProductCard } from "./components/ProductCard";
import { CategoryCard } from "./components/CategoryCard";
import { FeaturedPost } from "./components/FeaturedPost";
import { Newsletter } from "./components/Newsletter";

const products = [
  {
    title: "Graphic Design",
    department: "English Department",
    price: { original: "$16.48", discounted: "$6.48" },
    colors: ["sky-500", "teal-700", "orange-400", "slate-800"],
  },
  // Repeat for other products
];

const categories = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6e2de5a9259f3d4ec67262c3ba8e159e644e92fc9c671db306a896ded3a7aab2?placeholderIfAbsent=true&apiKey=9b01f9d37b0d4c44b273d9df28be27d5",
    label: "MEN",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d9bc229c76e2cb600df108cd6560172fb457845456ebea1c321082e1ebddc9fc?placeholderIfAbsent=true&apiKey=9b01f9d37b0d4c44b273d9df28be27d5",
    label: "WOMEN",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fe2bb36f65e62ef5cc886a036ae112e2401a77285bf50094ac8a9686ca62ad22?placeholderIfAbsent=true&apiKey=9b01f9d37b0d4c44b273d9df28be27d5",
    label: "ACCESSORIES",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/41f94e188d2921f7f88594a56eae5397390c0c608257e1eec34d22d69a6e7dc8?placeholderIfAbsent=true&apiKey=9b01f9d37b0d4c44b273d9df28be27d5",
    label: "KIDS",
  },
];

const featuredPosts = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ff6319a9caa503b0617723c4998e5a32240bcf152fe95062cd6646d00bc37a4b?placeholderIfAbsent=true&apiKey=9b01f9d37b0d4c44b273d9df28be27d5",
    isNew: true,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  // Repeat for other posts
];

export const EcommercePage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      {/* Hero Section */}
      <section className="flex overflow-hidden flex-col pb-28 w-full font-bold tracking-normal text-white bg-neutral-50 max-md:pb-24 max-md:max-w-full">
        {/* Hero content */}
      </section>

      {/* Categories Section */}
      <section className="flex overflow-hidden flex-col items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center py-20 max-md:max-w-full">
          <h2 className="text-2xl font-bold tracking-normal leading-none text-slate-800">
            EDITOR'S PICK
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="flex overflow-hidden flex-col justify-center items-end px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 justify-center">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="flex overflow-hidden flex-col justify-center items-center px-20 w-full tracking-wide bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 justify-center">
          {featuredPosts.map((post, index) => (
            <FeaturedPost key={index} {...post} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
        {/* Footer content */}
        <Newsletter />
      </footer>
    </main>
  );
};
