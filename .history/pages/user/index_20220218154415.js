function User() {
  return (
    <ul>
      <li>123123</li>
    </ul>
  );
}

export default User;

export async function getStaticPaths() {
  return {
    paths: [{ params: {} }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
