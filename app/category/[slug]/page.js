import Container from "@/components/layout/container/container";
import PostsHero from "@/components/ui/posts-hero/posts-hero";
import Posts from "@/components/ui/posts/posts";
import { getAllCategories, getAllPostsByCategory } from "@/lib/api";
import { openGraphMetadata, twitterMetadata } from "@/lib/baseMetadata";

import { siteMeta } from "@/lib/constans";
const { siteTitle, siteUrl } = siteMeta;

export const dynamicParams = false;
export async function generateStaticParams() {
  const allCats = await getAllCategories();
  return allCats.map(({ slug }) => {
    return { slug: slug };
  });
}

export async function generateMetadata({ params }) {
  const catSlug = await params;
  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }) => slug === catSlug.slug);
  const pageTitle = cat.title;
  const pageDesc = `${pageTitle}のウォーキング記録`;
  const ogpTitle = `${pageTitle} | ${siteTitle}`;
  const ogpUrl = new URL(`/category/${catSlug}`, siteUrl).toString();

  const metadata = {
    title: pageTitle,
    description: pageDesc,

    openGraph: {
      ...openGraphMetadata,
      title: ogpTitle,
      description: pageDesc,
      url: ogpUrl,
    },
    twitter: {
      ...twitterMetadata,
      title: ogpTitle,
      description: pageDesc,
    },
  };

  return metadata;
}

export default async function Category({ params }) {
  const catSlug = await params;

  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }) => slug === catSlug.slug);
  const posts = await getAllPostsByCategory(cat.slug);

  return (
    <>
      <Container>
        <PostsHero
          cat={cat}
          type="カテゴリ"
        />
        <Posts posts={posts} />
      </Container>
    </>
  );
}
