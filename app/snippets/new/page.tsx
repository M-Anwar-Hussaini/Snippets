import { db } from '@/db';
import { redirect } from 'next/navigation';

export default function NewSnippetPage() {
  async function createSnippet(formData: FormData) {
    // This needs to be a server action
    'use server';

    // Checks the user's input
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    // Create a new recored in the database
    const snippet = await db.snippet.create({ data: { code, title } });
    console.log(snippet);
    // Redirect the user to the home page
    redirect('/');
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3 text-lg">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        {/* Title */}
        <div className="flex gap-4 items-start">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="rounded border p-2 w-full"
          />
        </div>

        {/* Code */}
        <div className="flex gap-4 items-start">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea
            name="code"
            id="code"
            className="w-full rounded border p-2 h-40"
          ></textarea>
        </div>
        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="border px-3 py-1 rounded bg-blue-200"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
