import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-2">
      <nav>
        <ul className="flex">
          <li>
            <Link className="text-2xl font-bold  text-black" href={'/'}>
              Snipptes
            </Link>
          </li>
          <li className="ms-auto">
            <Link
              className="text-lg font-semibold text-white bg-green-600 py-1 px-3 rounded border "
              href={'/snippets/new'}
            >
              Create
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
