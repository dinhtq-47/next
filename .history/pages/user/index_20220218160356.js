const User = () => {
  return (
    <ul>
      <li>123123</li>
    </ul>
  );
};

export const getStaticPaths = () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/posts"
  //   );
  //   const result = await response.json();
  //   const paths = result.map((result) => ({
  //     params: { id: result.id.toString() },
  //   }));
  //   return {
  //     paths,
  //     fallback: false,
  //   };

  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
    ],
    fallback: false,
  };
};

export async function getStaticProps(context) {
  console.log("context", context);
  //   const { params } = context;
  //   const response = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${params.id}`
  //   );
  //   const result = await response.json();
  //   return {
  //     props: {
  //       data: result
  //     },
  //   };
}

export default User;
