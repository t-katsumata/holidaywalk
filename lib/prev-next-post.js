export function prevNextPost(allSlugs, currentSlug) {
  const numberOfPosts = allSlugs.length

  const index = allSlugs.findIndex(
    ({ slug }) => slug === currentSlug,
  )

  const prevPost =
    index + 1 === numberOfPosts
      ? { title: '', slug: '', thumbnail: '' }
      : allSlugs[index + 1]
  
  const nextPost =
    index === 0
      ? { title: '', slug: '', thumbnail: '' }
      : allSlugs[index - 1]
  
  return [prevPost, nextPost]
}