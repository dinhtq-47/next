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

export const getStaticPaths: async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
