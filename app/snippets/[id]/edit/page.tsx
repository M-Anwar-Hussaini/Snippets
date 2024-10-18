import { db } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react';
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
      <SnippetEditForm snippet={post} />
      <h1 className="text-lg font-bold text-gray-600">
        Editing snippit with id: {params.id}
      </h1>
      <form action="">
        <div className="flex my-2 flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={post?.title}
            className="border border-gray-300 p-2 bg-gray-50 rounded"
          />
        </div>
        <div className="flex my-2 flex-col">
          <label htmlFor="code">Code</label>
          <textarea
            name="code"
            id="code"
            value={post?.code}
            rows={10}
            className="border border-gray-300 p-2 bg-gray-50 rounded"
          >
            {post?.code}
          </textarea>
        </div>
        <div className="my-2 flex justify-end">
          <button
            className="px-3 py-1 border rounded bg-blue-500 text-white transition duration-200 hover:bg-blue-800"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
