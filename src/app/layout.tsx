import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://cinema-lab.vercel.app'),
  title: {
    default: 'シネマ考察ラボ｜映画・ドラマの考察・レビュー・伏線解説',
    template: '%s｜シネマ考察ラボ',
  },
  description:
    '人気映画・ドラマの考察・レビュー・伏線解説をお届け。君の名は。、鬼滅の刃、VIVANT、イカゲームなど話題作の深掘り分析。独自の視点で作品の魅力を徹底解剖する映画考察専門サイトです。',
  keywords: [
    '映画 考察',
    '映画 レビュー',
    'ドラマ 考察',
    '映画 伏線',
    '君の名は 考察',
    '鬼滅の刃 考察',
    'VIVANT 考察',
    'イカゲーム 考察',
    'シン・エヴァ 考察',
    '進撃の巨人 考察',
    '映画 おすすめ',
    'ドラマ おすすめ',
    'アニメ映画 レビュー',
    '映画 ランキング',
    '映画 感想',
  ],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'シネマ考察ラボ',
    title: 'シネマ考察ラボ｜映画・ドラマの考察・レビュー・伏線解説',
    description: '人気映画・ドラマ100作品以上の考察・レビュー・伏線解説。独自の視点で作品の魅力を深掘り。',
    url: 'https://cinema-lab.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'シネマ考察ラボ',
    description: '映画・ドラマの考察・レビュー・伏線解説をお届けする専門サイト',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://cinema-lab.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1611624572831066"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Serif+JP:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
