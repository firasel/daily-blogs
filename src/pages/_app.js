import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  if (Component.Layout) {
    return (
      <Component.Layout>
        <Component {...pageProps} />
      </Component.Layout>
    );
  }

  return <Component {...pageProps} />;
}

export default MyApp;
