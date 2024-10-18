'use client';

import { Snippet } from '@prisma/client';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return <div>Client componet with snippet title: {snippet.title}</div>;
}
