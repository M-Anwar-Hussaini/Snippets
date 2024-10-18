import { db } from '@/db';
import Link from 'next/link';

export default async function Home() {
  const snippet = await db.snippet.findMany();
  const renderedSnippets = snippet.map((snippet) => (
    <Link
      className="flex items-center justify-between border p-2 my-2"
      href={`/snippets/${snippet.id}`}
      key={snippet.id}
    >
      <div>{snippet?.title}</div>
      <div>View</div>
    </Link>
  ));
  return (
    <div className="flex flex-col">
      <div className="flex space-x-3">
        <Link href={'/snippets/new'}>New Snippet</Link>
      </div>
      <div>{renderedSnippets}</div>
    </div>
  );
}
