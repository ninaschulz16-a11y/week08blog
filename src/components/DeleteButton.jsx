"use client";

export default function DeleteButton({ commentId, handleDelete }) {
  return (
    <button
      style={{ marginLeft: "10px" }}
      onClick={() => handleDelete(commentId)}
    >
      Delete
    </button>
  );
}
