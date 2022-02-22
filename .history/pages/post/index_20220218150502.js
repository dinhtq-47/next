const Post = () => {
  return <div>df</div>;
};

export default Post;
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: true, // false or 'blocking'
  };
}
