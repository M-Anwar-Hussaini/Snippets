import { db } from '@/db';
import { notFound } from 'next/navigation';
import SnippetEditForm from '@/components/SnippetEditForm';

interface Props {
  params: {
    id: string;
  };
}

export default async function EditSnippetPage({ params }: Props) {
  const id = parseInt(params.id);
  const post = await db.snippet.findFirst({
    where: { id },
  });

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <h1 className="text-lg font-bold text-gray-600">
        Editing snippit with id: {params.id}
      </h1>
      <SnippetEditForm snippet={post} />
    </div>
  );
}
