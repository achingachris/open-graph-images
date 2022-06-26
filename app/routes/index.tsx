export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>This Link takes you to Hackmamba</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://hackmamba.io/blog/"
            rel="noreferrer"
          >
            Hackmamba Blogs
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://dev.to/hackmamba"
            rel="noreferrer"
          >
            Dev.to Hackmamba
          </a>
        </li>
      </ul>
    </div>
  );
}
