import Container from "@/components/layout/container/container";
import Posts from "@/components/ui/posts/posts";
import PageHero from "@/components/ui/page-hero/page-hero";
import { getAllPosts } from "@/lib/api";

import { siteMeta, PER_PAGE } from "@/lib/constans";
import { openGraphMetadata, twitterMetadata } from "@/lib/baseMetadata";
import { Pagination } from "@/components/ui/pagination/pagination";
const { siteTitle, siteUrl } = siteMeta;
const { postsPage } = PER_PAGE;

const pageTitle = "ウォーキング記録室";
const pageDesc = "過去のウォーキング記録一覧";
const ogpTitle = `${pageTitle} | ${siteTitle}`;
const ogpUrl = new URL("/memories", siteUrl).toString();

export const metadata = {
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

export default async function Memories() {
  const posts = await getAllPosts(postsPage);
  return (
    <>
      <Container>
        <PageHero
          image="https://images.microcms-assets.io/assets/bb6784427f6d4407af5d06e92452ab5a/16b8ab0bc1dd4a24a5a80bafd1ead2a1/memories-hero.jpg"
          title="Memories"
          subTitle="ウォーキング記録室"
          content="これまで歩いた場所の記録をまとめたページです。"
        />
        <Posts posts={posts.props.blogs} />
        <Pagination
          totalCount={posts.props.totalCount}
          prevNum={0}
          currentNum={1}
          nextNum={2}
        />
      </Container>
    </>
  );
}
