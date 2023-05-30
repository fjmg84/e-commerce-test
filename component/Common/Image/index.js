import Image from "next/image";

function ImageCard({ path, width, height, alt, myClassName = null }) {
  return (
    <>
      <Image
        className={myClassName}
        src={path}
        width={width}
        height={height}
        alt={alt}
        priority
      />
    </>
  );
}

export default ImageCard;
