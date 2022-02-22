const Post = () => {
  return <div>This is post page</div>;
};

export default Post;

export async function getStaticProps() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const data = response.json();

  return {
    props: {},
  };
}
