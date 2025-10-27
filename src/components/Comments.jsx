import db from "@/biblio/db";
import DeleteButton from "./DeleteButton";

export default async function Comments({ id }) {
  const result = await db.query(
    "SELECT * FROM comments08 WHERE post_id = $1 ORDER BY id DESC",
    [id]
  );
  const comments = result.rows;

  async function handleDelete(commentId) {
    "use server";
    await db.query("DELETE FROM comments08 WHERE id = $1", [commentId]);
  }

  if (comments.length === 0)
    return <p>No comments yet. Be the first to comment!</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {comments.map((comment) => (
        <li key={comment.id} style={{ marginBottom: "10px" }}>
          <strong>{comment.commenter}</strong>: {comment.content}
          <DeleteButton commentId={comment.id} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}
