const Post = () => {
  return <div>df</div>;
};

export default Post;

export async function getStaticPaths() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
}
