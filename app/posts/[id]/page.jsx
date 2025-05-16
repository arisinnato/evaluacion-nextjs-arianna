export default function PostDetail({ params }) {
    return (
      <div className="p-4">
        <h1 className="text-2x1 font-bold mb-4">Detalle del Post</h1>
        <p>ID del post: {params.id}</p>
      </div>
    );
  }