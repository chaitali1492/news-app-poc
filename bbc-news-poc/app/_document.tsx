import { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "./utils/createEmotionCache";

export default function Document({ emotionStyleTags }: any) {
  return (
    <Html lang="en">
      <Head>
        {/* Inject MUI styles first to match client and server rendering */}
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// Use getInitialProps to inject the server-side rendered styles
Document.getInitialProps = async (ctx:any) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props:any) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await (Html as any).getInitialProps(ctx);

  // Extract styles
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
