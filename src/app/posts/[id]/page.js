import db from "@/biblio/db";
import AddComment from "@/components/AddComment";
import Comments from "@/components/Comments";

export default async function PostPage({ params }) {
  const { id } =  await params; 

  const result = await db.query("SELECT * FROM posts08 WHERE id = $1", [id]);
  const post = result.rows[0];

  if (!post) return <p>Post not found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1><strong>{post.named}</strong></h1>

      {post.img_url && (
        <img
          src={post.img_url}
          alt={post.named}
          style={{ width: "400px", borderRadius: "10px" }}
        />
      )}

      {post.flavour && <p><strong>Flavour:</strong> {post.flavour}</p>}
      {post.history && <p><strong>History:</strong> {post.history}</p>}

      <hr />
      <h2>Comments</h2>


      <AddComment id={id} />

      <Comments id={id} />
    </div>
  );
}
