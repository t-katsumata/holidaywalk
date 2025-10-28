import ImageSlider from "@/components/ui/imgslider/imgslider"
import { Sawarabi_Gothic } from "next/font/google";
import { getAllSlugs, getPostBySlug } from "@/lib/api"
import Link from "next/link"
import { formatDate } from "@/lib/date"
import { prevNextPost } from "@/lib/prev-next-post"
import PostsPagination from "@/components/ui/posts-pagination/posts-pagination"
import "@/styles/style.scss";
import Container from "@/components/layout/container/container"
import { extractText } from "@/lib/extract-text"

const sawarabiGothic = Sawarabi_Gothic({
  weight: ['400'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-sawarabiGothic',
});

import { openGraphMetadata, twitterMetadata } from "@/lib/baseMetadata"
import { siteMeta } from "@/lib/constans"
const { siteTitle, siteUrl } = siteMeta

export const dynamicParams = false
export async function generateStaticParams() {
  const allSlugs = await getAllSlugs()

  return allSlugs.map(({ slug }) => {
    return { slug: slug }
  })
}

export async function generateMetadata({ params }) {
  const {slug} = await params
  const post = await getPostBySlug(slug)
  const { title: pageTitle, content } = post

  const pageDesc = extractText(content)
  const thumbnail = post.thumbnail
  
  const ogpTitle = `${pageTitle} | ${siteTitle}`
  const ogpUrl = new URL(`/memories/${slug}`, siteUrl).toString()

  const metadata = {
    title: pageTitle,
    description: pageDesc,

    openGraph: {
      ...openGraphMetadata,
      title: ogpTitle,
      description: pageDesc,
      url: ogpUrl,
      images: [
        {
          url: thumbnail.url,
          width: thumbnail.width,
          height: thumbnail.height,
        },
      ],
    },
    twitter: {
      ...twitterMetadata,
      title: ogpTitle,
      description: pageDesc,
      images: [thumbnail.url],
    },
  }

  return metadata
}

export default async function Post({ params }) {
  const slug = (await params).slug
  const post = await getPostBySlug(slug)
  const {
    title,
    rubi,
    content,
    category,
    location,
    images,
    day,
    weather,
    temperature,
    distance,
    route,
    rideWithGps
  } = post

  const allSlugs = await getAllSlugs()
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

  const walkSeconds = distance * 660
  const secondsParHours = Math.floor(walkSeconds / 3600)
  const secondsParMinutes = Math.floor((walkSeconds % 3600) / 60)
  const secondsParSeconds = walkSeconds % 60

  return (
    <Container>
      <article className="posts">
        <header className="posts__header">
          <div className="posts__headerWrapper">
            <h1 className="posts__title">
              <span className="posts__titleRuby">{rubi}</span>
              {title}
            </h1>
            <dl className="posts__tag">
              <div className="posts__category">
                <dt className="posts__categoryTitle">Category</dt>
                <dd className="posts__categoryBody">
                  <Link className="posts__categoryLink" href={`/category/${category[0].slug}`}>
                    <img role="presentation" src={category[0].icon.url} width={64} height={64} alt="" />
                    <span>{category[0].title}</span>
                  </Link>
                </dd>
              </div>
              <div className="posts__location">
                <dt className="posts__locationTitle">Location</dt>
                <dd className="posts__locationBody">
                  {location.map(({ title, slug }) => (
                    <span key={slug}>
                      <Link className="posts__locationLink" href={`/location/${slug}`}>{title}</Link>
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </header>
        <ImageSlider images={images} />
        <div className="posts__detail">
          <table className={sawarabiGothic.variable}>
            <caption className="sr-only">ウォーキング記録の詳細</caption>
            <tbody>
              <tr>
                <th>訪問日</th>
                <td>{formatDate(day)}</td>
              </tr>
              <tr>
                <th>天候</th>
                <td>天気：{weather}／気温：{temperature}℃</td>
              </tr>
              <tr>
                <th>歩行距離</th>
                <td>{distance}km</td>
              </tr>
              <tr>
                <th>推定歩数</th>
                <td>{distance * 1350}歩</td>
              </tr>
              <tr>
                <th>推定歩行時間</th>
                <td>{secondsParHours}時間{String(secondsParMinutes).padStart(2,'0')}分{String(secondsParSeconds).padStart(2,'0')}秒</td>
              </tr>
              <tr>
                <th>ルート</th>
                <td>{route}</td>
              </tr>
            </tbody>
          </table>
          <p className="posts__text">{content}</p>
        </div>
        <div className="posts__RWG">
          <iframe
            title="ウォーキングルートの地図"
            src={rideWithGps}
            style={{width: '1px', minWidth: '100%', height: '600px', border: 'none'}}
            allow="microphone"
          ></iframe>
        </div>
        <PostsPagination
          prevText={prevPost.title}
          prevUrl={`/memories/${prevPost.slug}`}
          prevThumb={prevPost.thumbnail}
          nextText={nextPost.title}
          nextUrl={`/memories/${nextPost.slug}`}
          nextThumb={nextPost.thumbnail}
        />
      </article>
    </Container>
  )
}
