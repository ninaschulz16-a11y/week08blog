import db from "@/biblio/db";
import Link from "next/link";

export default async function PostsPage({ searchParams }) {
  
  const sortBy =  (await searchParams)?.sort || "asc";

  const result = await db.query("SELECT * FROM posts08 ORDER BY id ASC");
  let posts = result.rows;

  if (sortBy === "desc") posts = posts.reverse();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Aromas</h1>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: "2rem" }}>
              <h2>
                <Link href={`/posts/${post.id}`}>{post.named}</Link>
              </h2>

              {post.img_url && (
                <img
                  src={post.img_url}
                  alt={post.named}
                  style={{ width: "200px", borderRadius: "10px" }}
                />
              )}

              {post.flavour && <p><strong>Flavour:</strong> {post.flavour}</p>}
              {post.history && <p><strong>History:</strong> {post.history}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

