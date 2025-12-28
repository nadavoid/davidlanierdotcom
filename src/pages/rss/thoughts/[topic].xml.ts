import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { noonPacific } from '../../../utils/formatDate';

export async function getStaticPaths() {
  const posts = await getCollection('thoughts');
  const topics = Array.from(
    new Set(posts.flatMap((p) => (p.data.topics ?? []).map((t) => t.toLowerCase())))
  );

  return topics.map((topic) => ({ params: { topic: encodeURIComponent(topic) } }));
}

export async function GET(context: any) {
  const { params, site } = context;
  const topic = decodeURIComponent(params.topic ?? '').toLowerCase();
  const posts = await getCollection('thoughts');

  const filtered = posts
    .filter((p) => (p.data.topics || []).map((t) => t.toLowerCase()).includes(topic))
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  if (!filtered.length) {
    return new Response(null, { status: 404 });
  }

  const items = await Promise.all(
    filtered.map(async (post) => {
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
    title: `${decodeURIComponent(params.topic)} — David Lanier`,
    description: `Posts tagged "${decodeURIComponent(params.topic)}"`,
    site: site ?? import.meta.env.SITE,
    items,
  });
}
