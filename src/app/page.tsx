import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import { getAllArticles } from '@/lib/articles';
import { titleList } from '@/data/titles';
import { CATEGORY_LABELS } from '@/lib/types';
import type { ArticleCategory } from '@/lib/types';

export default function Home() {
  const articles = getAllArticles();
  const featuredArticles = articles.slice(0, 3);
  const recentArticles = articles.slice(3, 15);

  return (
    <>
      <section className="spotlight bg-gradient-to-b from-[#0a0a12] via-[#10101a] to-[#0a0a12] py-16 border-b-2 border-[#282838]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <p className="text-[#e50914] text-xs font-black tracking-[0.3em] uppercase mb-3">
              Cinema Analysis Lab
            </p>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight text-white" style={{ fontFamily: '"Noto Serif JP", serif' }}>
              映画の世界を
              <span className="text-[#e50914]">深く</span>
              読み解く
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
              映画・ドラマの伏線・テーマ・キャラクターを独自の視点で徹底考察。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {featuredArticles.map(article => {
              const title = titleList.find(t => t.slug === article.titleSlug);
              return (
                <Link
                  key={article.slug}
                  href={`/article/${article.slug}`}
                  className="group cinema-card !bg-[#14141e] p-5 hover:!border-[#e50914]"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: title?.coverColor }} />
                    <span className="text-xs text-gray-500 font-medium">{title?.title}</span>
                  </div>
                  <h2 className="text-sm font-bold text-gray-200 mb-2 group-hover:text-[#e50914] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-xs text-gray-600 line-clamp-2">{article.excerpt}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a12] border-b border-[#282838] py-3 overflow-x-auto">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex gap-2 flex-nowrap">
            {titleList.slice(0, 14).map(t => (
              <Link
                key={t.slug}
                href={`/title/${t.slug}`}
                className="flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded border border-[#282838] text-gray-500 hover:border-[#e50914] hover:text-[#e50914] hover:bg-[#e50914]/5 transition-all"
              >
                {t.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                <span className="text-[#e50914]">&#9612;</span>
                最新の考察
              </h2>
              <div className="flex gap-3">
                {(Object.entries(CATEGORY_LABELS) as [ArticleCategory, string][]).slice(0, 3).map(
                  ([key, label]) => (
                    <Link
                      key={key}
                      href={`/category/${key}`}
                      className="text-xs text-gray-600 hover:text-[#e50914] transition-colors font-medium"
                    >
                      {label}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {recentArticles.map(article => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>

            {articles.length > 15 && (
              <div className="text-center mt-8">
                <Link
                  href="/category/all"
                  className="inline-block bg-[#e50914] text-white px-8 py-3 rounded text-sm font-black hover:bg-[#c5070f] transition-colors"
                >
                  すべての考察を見る（{articles.length}件）
                </Link>
              </div>
            )}
          </div>

          <div className="lg:w-80 flex-shrink-0">
            <Sidebar />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'シネマ考察ラボ',
            description: '映画・ドラマの考察・レビュー・伏線解説をお届けする専門サイト',
            url: 'https://cinema-lab.vercel.app',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://cinema-lab.vercel.app/category/all?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </>
  );
}
