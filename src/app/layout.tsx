import Head from "next/head";

export const metadata = {
  title: "Recruiting Tracker",
  description: "Track Job Applications",
  icons: {
    icon: "/favicon-16x16.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <body>{children}</body>
    </>
  );
}
