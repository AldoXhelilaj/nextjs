import Link from "next/link";

function News() {
  return (
    <>
      <h1>News page</h1>

      <ul>
        <li>
          <Link href="/news/some-link">News 1</Link>
        </li>
        <li>
          <Link href="/news/some-link-2">News 2</Link>
        </li>
        <li>
          <Link href="/news/some-link-3">News 3</Link>
        </li>
      </ul>
    </>
  );
}

export default News;
