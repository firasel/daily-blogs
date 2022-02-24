import { RecoilRoot } from "recoil";
import DashboardLayout from "../layouts/DashboardLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  if (Component.Layout) {
    return (
      <RecoilRoot>
        <Component.Layout>
          <Component {...pageProps} />
        </Component.Layout>
      </RecoilRoot>
    );
  }

  return (
    <RecoilRoot>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </RecoilRoot>
  );
}

export default MyApp;
