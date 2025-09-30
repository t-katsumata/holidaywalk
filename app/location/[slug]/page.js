import Container from "@/components/layout/container/container";
import PostsHero from "@/components/ui/posts-hero/posts-hero";
import Posts from "@/components/ui/posts/posts";
import { getAllLocations, getAllPostsByLocations } from "@/lib/api";
import { openGraphMetadata, twitterMetadata } from "@/lib/baseMetadata";

import { siteMeta } from "@/lib/constans";
const { siteTitle, siteUrl } = siteMeta;

export const dynamicParams = false;
export async function generateStaticParams() {
  const allLocs = await getAllLocations();
  return allLocs.map(({ slug }) => {
    return { slug: slug };
  });
}

export async function generateMetadata({ params }) {
  const locSlug = await params;
  const allLocs = await getAllLocations();
  const locs = allLocs.find(({ slug }) => slug === locSlug.slug);
  const pageTitle = locs.title;
  const pageDesc = `${pageTitle}エリアのウオーキング記録`;
  const ogpTitle = `${pageTitle} | ${siteTitle}`;
  const ogpUrl = new URL(`/location/${locSlug}`, siteUrl).toString();

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
  }

  return metadata;
}

export default async function Location({ params }) {
  const locSlug = await params;

  const allLocs = await getAllLocations();
  const locs = allLocs.find(({ slug }) => slug === locSlug.slug);
  const posts = await getAllPostsByLocations(locs.slug);

  return (
    <>
      <Container>
        <PostsHero
          cat={locs}
          type="訪問場所"
        />
        <Posts posts={posts} />
      </Container>
    </>
  );
}
