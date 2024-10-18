import { notFound } from 'next/navigation';
import { db } from '@/db';
import Link from 'next/link';

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });
  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <div className="flex m-4 items-center justify-between">
        <h1 className="text-xl font-bold">{snippet?.title}</h1>
        <div className="flex space-x-4">
          <Link
            className="px-3 py-1 hover:bg-blue-400 transition duration-300 rounded border"
            href={`/snippets/${props.params.id}/edit`}
          >
            Edit
          </Link>
          <button className="px-3 py-1 hover:bg-red-600 transition duration-300 rounded border">
            Delete
          </button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-400">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
