import Head from "next/head";
import { usePathname } from "next/navigation";
export default function ProductShow() {
  const pathname = usePathname();
  const category = pathname.split("/")[1];
  const title = pathname.split("/")[2];

  console.log(category, title);

  return (
    <>
      <Head>
        <title>E-Commerce Product</title>
      </Head>
      <h1>Product this</h1>
    </>
  );
}
