import Container from "@/components/layout/container/container";
import PageHero from "@/components/ui/page-hero/page-hero";
import "@/styles/style.scss";
import { openGraphMetadata, twitterMetadata } from "@/lib/baseMetadata";
import profileImage from "@/images/about-profile.jpg";

import { siteMeta } from "@/lib/constans";
import Image from "next/legacy/image";
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
          image="https://images.microcms-assets.io/assets/bb6784427f6d4407af5d06e92452ab5a/f339fb59438248109aa0f19dda214dff/about-hero.jpg"
          title="About"
          subTitle="このサイトについて"
          content="このサイトに関する説明です。"
        />
        <section aria-labelledby="aboutSite" className="commonSection">
          <h2 id="aboutSite" className="commonSection__heading">“空犬冒険記”とは？</h2>
          <p>ようこそ「空犬冒険記」へ！<br />このサイトでは、2023年から今までに歩いてきた長距離ウォーキングの記録を、写真と一緒に振り返っています。<br />普段よく歩くお気に入りのスポットを、（河川・湖・池や沼・海岸・市街地）の5つのカテゴリーと、（東京・神奈川・埼玉・千葉・茨城・その他）の6つのエリアに分けてご紹介。気になる場所があれば、ぜひのぞいてみてくださいね。<br />さらに「歩数算出ツール」ページでは、身長や体重、歩き方、歩くスピードを入力するだけで、1kmごとの推定歩数や時間、消費カロリーを自動で計算できます。「自分の歩き方だと、どれくらい効果があるんだろう？」と気になったときに、ちょっと試してみてもらえたら嬉しいです。</p>
        </section>
        <section aria-labelledby="profile" className="commonSection">
          <h2 id="profile" className="commonSection__heading">管理人紹介</h2>
          <div className="profile-wrapper">
            <dl className="profile-detail">
              <div className="profile-detail__item">
                <dt className="profile-detail__title">名前（HN）</dt>
                <dd className="profile-detail__body">ソライヌ</dd>
              </div>
              <div className="profile-detail__item">
                <dt className="profile-detail__title">出身地</dt>
                <dd className="profile-detail__body">静岡県富士宮市</dd>
              </div>
              <div className="profile-detail__item">
                <dt className="profile-detail__title">現在地</dt>
                <dd className="profile-detail__body">東京都中野区</dd>
              </div>
              <div className="profile-detail__item">
                <dt className="profile-detail__title">誕生日</dt>
                <dd className="profile-detail__body">11月1日</dd>
              </div>
              <div className="profile-detail__item">
                <dt className="profile-detail__title">好きなスポット</dt>
                <dd className="profile-detail__body">河川、湖、池や沼</dd>
              </div>
              <div className="profile-detail__item">
                <dt className="profile-detail__title">好きなエリア</dt>
                <dd className="profile-detail__body">埼玉、千葉</dd>
              </div>
              <div className="profile-detail__item">
                <dt className="profile-detail__title">歴代ウォーキングシューズ</dt>
                <dd className="profile-detail__body">
                  <ul>
                    <li>ナイキ フライニット ルナ ワン プラス ブラック/ホワイト-ライトチャコール（2013～2015年）</li>
                    <li>ナイキ エアズームストラクチャー/ブラック（2015～2018年）</li>
                    <li>ニューバランス フレッシュフォーム ザンテ パシュート（2019～2024年）</li>
                    <li>アシックス ゲルカヤノ ブルー（2025年）</li>
                  </ul>
                </dd>
              </div>
            </dl>
            <figure className="profile-image">
              <Image
                src={profileImage}
                alt="プロフィール画像"
                width="350"
                height="350"
                priority
              />
            </figure>
          </div>
        </section>
      </Container>
    </>
  );
}
