function User() {
  return (
    <ul>
      <li>123123</li>
    </ul>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

export default User;
