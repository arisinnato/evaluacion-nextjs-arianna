import Link from 'next/link'; 


async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
  }
  
  export default async function PostsPage() {
    const posts = await getPosts();
  
    return (
      <div className="p-4">
        <h1 className="text-2x1 font-bold mb-4">Lista de Posts</h1>
        <ul className="list-group">
          {posts.map((post) => (
            <li key={post.id} className="list-group-item mb-3">
              <Link href={`/posts/${post.id}`} className="text-decoration-none">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-600">{post.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }