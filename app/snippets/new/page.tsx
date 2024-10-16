import React from 'react';

export default function NewSnippetPage() {
  return (
    <form>
      <h3 className="font-bold m-3 text-lg">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
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

        <div className="flex gap-4 items-start">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea
            name="title"
            id="title"
            className="w-full rounded border p-2 h-40"
          ></textarea>
        </div>
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
