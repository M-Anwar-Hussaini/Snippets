import { db } from '@/db';

export default async function Home() {
  const snippet = await db.snippet.findMany();
  const renderedSnippets = snippet.map((snippet) => (
    <div key={snippet.id}>{snippet?.title}</div>
  ));
  return <div>{renderedSnippets}</div>;
}
