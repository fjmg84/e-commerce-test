import PageLayout from "../component/PageLayout";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
