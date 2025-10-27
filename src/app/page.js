import db from "@/biblio/db";
import Link from "next/link";

export default async function HomePage() {
  const result = await db.query("SELECT * FROM posts08 ORDER BY id DESC LIMIT 1");
  const posts = result.rows;
  const currentPost = posts[0];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Streets Aromas</h1>
      <p>Welcome to our taster session for Brazilian flavours!</p>

      {currentPost && (
        <Link href={`/posts/${currentPost.id}`}>
          {currentPost.img_url && (
            <img
              src={currentPost.img_url}
              alt={currentPost.named}
              style={{ width: "400px", borderRadius: "10px", cursor: "pointer" }}
            />
          )}
          <h2>{currentPost.named}</h2>
        </Link>
      )}
    </div>
  );
}
