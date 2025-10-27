import db from "@/biblio/db";

export default function AddComment({ id }) {
  async function handleSubmit(formData) {
    "use server";
    const author = formData.get("author");
    const content = formData.get("content");

    if (!author || !content) return;

    await db.query(
      "INSERT INTO comments08 (post_id, commenter, content) VALUES ($1, $2, $3)",
      [id, author, content]
    );
  }

  return (
    <form action={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        name="author"
        placeholder="Your name"
        required
        style={{ display: "block", marginBottom: "10px", width: "300px" }}
      />
      <textarea
        name="content"
        placeholder="Your comment"
        required
        rows={3}
        style={{ display: "block", marginBottom: "10px", width: "300px" }}
      />
      <button type="submit">Post Comment</button>
    </form>
  );
}
