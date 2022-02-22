import Image from "next/image";
const Post = () => {
  return (
    <div>
      <Image
        src="/me.png"
        alt="me"
        width="64"
        height="64"
      />
    </div>
  );
};

export default Post;
