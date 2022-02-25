import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import DashboardLayout from "../layouts/DashboardLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.Layout) {
    return (
      <SessionProvider session={session}>
        <RecoilRoot>
          <Component.Layout>
            <Component {...pageProps} />
          </Component.Layout>
        </RecoilRoot>
      </SessionProvider>
    );
  }

  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
