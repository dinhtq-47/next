function User({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default User;

export async function getStaticPaths() {
    return {
      paths: [
        { params: { ... } }
      ],
      fallback: true // false or 'blocking'
    };
  }