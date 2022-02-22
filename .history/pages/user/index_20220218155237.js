function User() {
  return (
    <ul>
      <li>123123</li>
    </ul>
  );
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const result = await response.json();

  console.log("123123");
  const paths = result.map((result) => ({
    params: { id: result.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

export default User;
