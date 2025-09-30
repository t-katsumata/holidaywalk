import Posts from "@/components/ui/posts/posts";
import { getAllCategories, getAllLocations, getAllPosts } from "@/lib/api";
import Button from "@/components/ui/button/button";
import "@/styles/style.scss";
import Container from "@/components/layout/container/container";
import IndexHero from "@/components/ui/index-hero/index-hero";
import Categories from "@/components/ui/categories/categories";
import Locations from "@/components/ui/locations/locations";
import locationImage from "@/images/location.png";
import Image from "next/legacy/image";
import { PER_PAGE } from "@/lib/constans";
const { indexPage } = PER_PAGE;

export default async function Home() {
  const posts = await getAllPosts(indexPage);
  const categories = await getAllCategories();
  const locations = await getAllLocations();

  return (
    <>
      <IndexHero />
      <Container>
        <section className="index__section">
          <h2 className="index__sectionTitle">New Post<span>最新記事</span></h2>
          <Posts posts={posts.props.blogs} />
          <Button buttonUrl="/memories" buttonText="View More" />
        </section>
        <section className="index__section">
          <h2 className="index__sectionTitle">Category<span>カテゴリーから選ぶ</span></h2>
          <Categories categories={categories} />
        </section>
        <section className="index__section">
          <h2 className="index__sectionTitle">Location<span>訪問場所から選ぶ</span></h2>
          <figure className="index__locationImage">
            <Image
              src={locationImage}
              alt=""
              width={440}
              height={484}
            />
          </figure>
          <Locations locations={locations} />
        </section>
      </Container>
    </>
  );
}
