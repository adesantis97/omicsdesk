import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'blog'>;

/**
 * Tags are hand-written per post and drifted in casing and separators
 * ("rna-seq" vs "rnaseq" vs "RNA-seq", "batch-effects" vs "batch effects"),
 * so match on a normalised form instead of the literal string.
 */
const norm = (tag: string) => tag.toLowerCase().replace(/[^a-z0-9]/g, '');

/**
 * Posts most related to `current`, ranked by shared tags then recency.
 *
 * Always returns up to `limit` posts: when nothing shares a tag the newest
 * posts are used, so no article is ever left without outbound internal links.
 */
export function relatedPosts(current: Post, all: Post[], limit = 3): Post[] {
  const mine = new Set(current.data.tags.map(norm));

  return all
    .filter((p) => p.slug !== current.slug)
    .map((post) => ({
      post,
      score: post.data.tags.map(norm).filter((t) => mine.has(t)).length,
    }))
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf(),
    )
    .slice(0, limit)
    .map((x) => x.post);
}
