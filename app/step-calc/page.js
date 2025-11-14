import Container from "@/components/layout/container/container";
import PageHero from "@/components/ui/page-hero/page-hero";
import StepCalc from "./step-calc";

import { siteMeta } from "@/lib/constans";
import { openGraphMetadata, twitterMetadata } from "@/lib/baseMetadata";
const { siteTitle, siteUrl } = siteMeta;

const pageTitle = "歩数算出ツール";
const pageDesc = "身長、体重、歩き方、歩行速度を入力すると、1㎞毎の推定歩数、推定時間、推定消費カロリーを算出します";
const ogpTitle = `${pageTitle} | ${siteTitle}`;
const ogpUrl = new URL("/step-calc", siteUrl).toString();

export const metadata = {
  time: pageTitle,
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

export default function walkCalc() {
  return (
    <Container>
      <PageHero
        image="https://images.microcms-assets.io/assets/bb6784427f6d4407af5d06e92452ab5a/2908d62370a449d5b5493c1aba52dd58/stepCalc-hero.jpg"
        title="Step Calculation"
        subTitle="歩数算出ツール"
        content="身長、体重、歩き方、歩行速度を入力すると、1㎞毎の推定歩数、推定時間、推定消費カロリーを算出します。"
      />
      <StepCalc />
    </Container>
  );
}
