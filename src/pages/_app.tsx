import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "김인철 | junior Dev",
  description: "안녕하세요, 주니어 개발자 김인철입니다.",
  canonical: "hhttps://my-site-hitee8239.vercel.app/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://my-site-hitee8239.vercel.app/",
    title: "김인철 | junior Dev",
    site_name: "김인철 | junior Dev",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "김인철 | junior Dev",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "김인철 | junior Dev",
    },
    {
      name: "msapplication-tooltip",
      content: "김인철 | junior Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
