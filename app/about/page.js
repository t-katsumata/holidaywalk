import Container from "@/components/layout/container/container";
import PageHero from "@/components/ui/page-hero/page-hero";
import "@/styles/style.scss";
import { openGraphMetadata, twitterMetadata } from "@/lib/baseMetadata";

import { siteMeta } from "@/lib/constans";
const { siteTitle, siteUrl } = siteMeta;

const pageTitle = "このサイトについて";
const pageDesc = "当サイト「空犬冒険記」の概要です";
const ogpTitle = `${pageTitle} | ${siteTitle}`;
const ogpUrl = new URL("/about", siteUrl).toString();

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

export default function Page() {
  return (
    <>
      <Container>
        <PageHero
          image="https://images.microcms-assets.io/assets/bb6784427f6d4407af5d06e92452ab5a/546609912878437d9ca39841c03b6723/about-hero.jpg"
          title="About"
          subTitle="このサイトについて"
          content="このサイトに関する説明です"
        />
        <section className="commonSection">
          <h2 className="commonSection__heading">“空犬冒険記”とは？</h2>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </section>
        <section className="commonSection">
          <h2 className="commonSection__heading">管理人紹介</h2>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </section>
      </Container>
    </>
  );
}
