const Post = (props) => {
  console.log(props);
  return <div>This is post page</div>;
};

export default Post;

export async function getStaticPaths() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const data = await response.json();

  console.log(data.map((item) => item.id));
  return {
    paths: [{ params: {} }],
    fallback: true,
  };
}

// export async function getStaticProps() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts"
//   );

//   const data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
