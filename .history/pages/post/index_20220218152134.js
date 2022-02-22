const Post = () => {
  return <div>df</div>;
};

export default Post;
// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: "1" } }],
//     fallback: true, // false or 'blocking'
//   };
// }

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
