import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { titleList, getTitleBySlug } from '@/data/titles';
import { getArticlesByTitle } from '@/lib/articles';
import { getVODLinks } from '@/data/affiliates';
import { TYPE_LABELS } from '@/lib/types';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return titleList.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = getTitleBySlug(slug);
  if (!title) return {};

  return {
    title: `${title.title}の考察・レビューまとめ`,
    description: `${title.title}の考察・レビュー・伏線解説記事一覧。${title.description}`,
    keywords: [title.title, title.titleEn, `${title.title} 考察`, `${title.title} レビュー`, `${title.title} 伏線`, '考察', 'レビュー', ...title.genre],
    openGraph: {
      title: `${title.title}の考察・レビューまとめ`,
      description: `${title.title}の考察・レビュー・伏線解説をお届け。`,
      url: `https://cinema-lab.vercel.app/title/${slug}`,
      siteName: 'シネマ考察ラボ',
    },
    alternates: {
      canonical: `https://cinema-lab.vercel.app/title/${slug}`,
    },
  };
}

export default async function TitlePage({ params }: PageProps) {
  const { slug } = await params;
  const title = getTitleBySlug(slug);
  if (!title) notFound();

  const articles = getArticlesByTitle(slug);
  const vodLinks = getVODLinks(title);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 relative z-10">
      <div className="spotlight cinema-card !border-2 p-6 md:p-8 mb-8 relative overflow-hidden"
        style={{ borderColor: title.coverColor }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: `linear-gradient(135deg, ${title.coverColor}, transparent)` }}
        />
        <div className="relative z-10">
          <nav className="text-xs text-gray-600 mb-3 flex items-center gap-1">
            <Link href="/" className="hover:text-[#e50914] transition-colors">ホーム</Link>
            <span className="text-gray-700">/</span>
            <span className="text-gray-400">{title.title}</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white mb-2" style={{ fontFamily: '"Noto Serif JP", serif' }}>{title.title}</h1>
          <p className="text-sm text-gray-500 mb-3">
            {title.director && <span className="text-gray-400">監督：{title.director}</span>}
            <span className="mx-2 text-gray-700">|</span>
            <span style={{ color: title.coverColor }}>{TYPE_LABELS[title.type]}</span>
            <span className="mx-2 text-gray-700">|</span>
            <span className="text-gray-500">{title.year}年</span>
            <span className="mx-2 text-gray-700">|</span>
            <span className="text-gray-500">{title.genre.join(' / ')}</span>
          </p>
          <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">{title.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {vodLinks.slice(0, 3).map(link => (
              <a
                key={link.service}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-1.5 bg-[#1c1c2a] hover:bg-[#252535] text-gray-300 text-xs font-bold px-3 py-1.5 rounded border border-[#282838] hover:border-[#f5c518]/50 transition-all"
              >
                {link.label}
                {link.badge && (
                  <span className="text-[10px] font-black text-[#0a0a12] bg-[#f5c518] px-1.5 py-0.5 rounded">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              <span className="text-[#e50914]">&#9612;</span>
              考察記事一覧
              <span className="text-sm font-normal text-gray-600">({articles.length}件)</span>
            </h2>
          </div>

          {articles.length === 0 ? (
            <p className="text-gray-600 text-center py-12">記事の準備中です...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {articles.map(article => (
                <ArticleCard key={article.slug} article={article} showTitle={false} />
              ))}
            </div>
          )}
        </div>

        <div className="lg:w-80 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
