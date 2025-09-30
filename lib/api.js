import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: 'blogs',
      queries: {
        fields: 'title,slug,thumbnail',
        orders: '-publishDate',
        limit: limit
      },
    })
    return slugs.contents
  } catch (err) {
    console.log("~~ getAllSlugs ~~");
    console.log(err);
  }
}

export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` },
    })
    return post.contents[0]
  } catch (err) {
    console.log("~~ getPostBySlug ~~");
    console.log(err);
  }
}

export async function getAllPosts(limit = 100, offset = 0) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        fields: "publishedAt,title,slug,thumbnail,category,location,content",
        orders: "-publishDate",
        offset: offset,
        limit: limit,
      },
    });
    return {
      props :{
        blogs: posts.contents,
        totalCount: posts.totalCount
      },
    };
  } catch (err) {
    console.log("~~ getAllPosts ~~");
    console.log(err);
  }
}

export async function getAllCategories(limit = 100) {
  try {
    const categories = await client.get({
      endpoint: "category",
      queries: {
        fields: "title,slug,icon,content,thumbnail",
        limit: limit,
      },
    });
    return categories.contents;
  } catch (err) {
    console.log("~~ getAllCategories ~~");
    console.log(err);
  }
}

export async function getAllPostsByCategory(id, limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        filters: `category[contains]${id}`,
        fields: 'publishedAt,title,slug,thumbnail,category,location,content',
        orders: '-publishDate',
        limit: limit,
      },
    });
    return posts.contents
  } catch (err) {
    console.log("~~ getAllPostsByCategory ~~");
    console.log(err);
  }
}

export async function getAllLocations(limit = 100) {
  try {
    const categories = await client.get({
      endpoint: "location",
      queries: {
        fields: "title,slug,content,thumbnail",
        limit: limit,
      },
    });
    return categories.contents;
  } catch (err) {
    console.log("~~ getAllLocations ~~");
    console.log(err);
  }
}

export async function getAllPostsByLocations(id, limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        filters: `location[contains]${id}`,
        fields: 'publishedAt,title,slug,thumbnail,category,location,content',
        orders: '-publishDate',
        limit: limit,
      },
    });
    return posts.contents
  } catch (err) {
    console.log("~~ getAllPostsByLocations ~~");
    console.log(err);
  }
}
