import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { noonPacific } from '../../utils/formatDate';

export async function GET(context: any) {
  const { site } = context;
  const posts = await getCollection('thoughts');

  // Sort by date descending
  posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  const items = await Promise.all(
    posts.map(async (post) => {
      const rendered = await post.render();
      const pubDateUtc = noonPacific(post.data.date as Date);

      return {
        title: post.data.title,
        pubDate: pubDateUtc,
        description: post.data.summary,
        link: `/thoughts/${post.slug}/`,
        content: rendered?.html ?? undefined,
      };
    })
  );

  return rss({
    title: 'David Lanier — Thoughts',
    description: 'Thoughts and musings from David Lanier',
    site: site ?? import.meta.env.SITE,
    items,
  });
}
