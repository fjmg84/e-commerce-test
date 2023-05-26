import PageLayout from "../component/PageLayout";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
