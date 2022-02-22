const User = () => {
  return (
    <ul>
      <li>123123</li>
    </ul>
  );
};

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: { id: "1" },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  console.log("context", context);
  //   const { params } = context;
  //   const response = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${params.id}`
  //   );
  //   const result = await response.json();
  return {
    props: {},
  };
};

export default User;
