import { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticles, getArticlesByCategory } from '@/lib/articles';
import { CATEGORY_LABELS, ArticleCategory } from '@/lib/types';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const validCategories = ['review', 'analysis', 'theory', 'comparison', 'ranking', 'all'];

export function generateStaticParams() {
  return validCategories.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === 'all') {
    return {
      title: 'すべての考察記事',
      description: '映画・ドラマの考察・レビュー・伏線解説記事の一覧。',
    };
  }
  const label = CATEGORY_LABELS[slug as ArticleCategory] || slug;
  return {
    title: `${label}の記事一覧`,
    description: `${label}に関する映画・ドラマ考察記事の一覧です。`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  let articles;
  let pageTitle: string;

  if (slug === 'all') {
    articles = getAllArticles();
    pageTitle = 'すべての考察記事';
  } else {
    articles = getArticlesByCategory(slug as ArticleCategory);
    pageTitle = CATEGORY_LABELS[slug as ArticleCategory] || slug;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 relative z-10">
      <div className="mb-8">
        <nav className="text-xs text-gray-600 mb-3 flex items-center gap-1">
          <Link href="/" className="hover:text-[#e50914] transition-colors">ホーム</Link>
          <span className="text-gray-700">/</span>
          <span className="text-gray-400">{pageTitle}</span>
        </nav>
        <h1 className="text-2xl font-black text-white">{pageTitle}</h1>
        <p className="text-sm text-gray-600 mt-1">{articles.length}件の記事</p>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        <Link
          href="/category/all"
          className={`text-xs font-bold px-3 py-1.5 rounded border transition-colors ${
            slug === 'all'
              ? 'bg-[#e50914] text-white border-[#e50914]'
              : 'bg-transparent text-gray-500 border-[#282838] hover:border-[#e50914] hover:text-[#e50914]'
          }`}
        >
          すべて
        </Link>
        {(Object.entries(CATEGORY_LABELS) as [ArticleCategory, string][]).map(([key, label]) => (
          <Link
            key={key}
            href={`/category/${key}`}
            className={`text-xs font-bold px-3 py-1.5 rounded border transition-colors ${
              slug === key
                ? 'bg-[#e50914] text-white border-[#e50914]'
                : 'bg-transparent text-gray-500 border-[#282838] hover:border-[#e50914] hover:text-[#e50914]'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0">
          {articles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-2">記事が見つかりませんでした</p>
              <Link href="/" className="text-sm text-[#e50914] hover:text-[#f5c518] font-bold">
                トップページに戻る
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {articles.map(article => (
                <ArticleCard key={article.slug} article={article} />
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
