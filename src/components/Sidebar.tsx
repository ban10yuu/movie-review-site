import Link from 'next/link';
import { titleList } from '@/data/titles';
import { getPopularArticles } from '@/lib/articles';
import { generalAffiliates } from '@/data/affiliates';
import { TYPE_LABELS } from '@/lib/types';

export default function Sidebar() {
  const popularArticles = getPopularArticles(5);

  return (
    <aside className="space-y-6">
      {/* VOD Affiliates */}
      <div className="cinema-card !border-[#f5c518] p-5">
        <h3 className="text-sm font-black text-[#f5c518] mb-4 flex items-center gap-2">
          &#9670; 動画配信で今すぐ観る
        </h3>
        <div className="space-y-3">
          {generalAffiliates.slice(0, 4).map((af, i) => (
            <a
              key={af.title}
              href={af.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block relative overflow-hidden rounded-lg group transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-black/30"
            >
              <div
                className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity"
                style={{ background: `linear-gradient(135deg, ${af.color} 0%, transparent 60%)` }}
              />
              <div
                className="absolute left-0 top-0 bottom-0 w-1 group-hover:w-1.5 transition-all"
                style={{ backgroundColor: af.color }}
              />
              <div className="relative bg-[#18182a] border border-[#282838] group-hover:border-[#383850] rounded-lg p-4 pl-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-black text-base text-white">{af.title}</span>
                  {af.badge && (
                    <span
                      className="text-xs font-black px-2.5 py-1 rounded-full text-white shadow-lg"
                      style={{ backgroundColor: af.color, boxShadow: `0 0 12px ${af.color}60` }}
                    >
                      {af.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 mb-3 leading-relaxed">{af.description}</p>
                <div
                  className="flex items-center justify-center gap-1 text-sm font-bold py-2 rounded-md transition-all group-hover:brightness-110"
                  style={{ backgroundColor: af.color, color: '#fff', boxShadow: `0 2px 8px ${af.color}40` }}
                >
                  今すぐチェック
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                {i === 0 && (
                  <div className="absolute -top-0 -right-0">
                    <div className="bg-[#f5c518] text-[#0a0a12] text-[10px] font-black px-3 py-0.5 rounded-bl-lg rounded-tr-lg">
                      おすすめ
                    </div>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="cinema-card p-5">
        <h3 className="text-sm font-black text-[#e50914] mb-4 flex items-center gap-2">
          &#9670; 人気の考察
        </h3>
        <ol className="space-y-3">
          {popularArticles.map((article, i) => (
            <li key={article.slug}>
              <Link href={`/article/${article.slug}`} className="flex gap-3 group">
                <span className={`rank-badge ${i === 0 ? 'rank-1' : i === 1 ? 'rank-2' : i === 2 ? 'rank-3' : 'rank-other'}`}>
                  {i + 1}
                </span>
                <span className="text-sm text-gray-400 group-hover:text-[#e50914] transition-colors leading-snug line-clamp-2">
                  {article.title}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      {/* More VOD */}
      <div className="cinema-card !border-[#f5c518] p-5">
        <h3 className="text-sm font-black text-[#f5c518] mb-4 flex items-center gap-2">
          &#9670; その他の配信サービス
        </h3>
        <div className="space-y-3">
          {generalAffiliates.slice(4).map(af => (
            <a
              key={af.title}
              href={af.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block relative overflow-hidden rounded-lg group transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-black/30"
            >
              <div
                className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity"
                style={{ background: `linear-gradient(135deg, ${af.color} 0%, transparent 60%)` }}
              />
              <div
                className="absolute left-0 top-0 bottom-0 w-1 group-hover:w-1.5 transition-all"
                style={{ backgroundColor: af.color }}
              />
              <div className="relative bg-[#18182a] border border-[#282838] group-hover:border-[#383850] rounded-lg p-4 pl-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-black text-base text-white">{af.title}</span>
                  {af.badge && (
                    <span
                      className="text-xs font-black px-2.5 py-1 rounded-full text-white shadow-lg"
                      style={{ backgroundColor: af.color, boxShadow: `0 0 12px ${af.color}60` }}
                    >
                      {af.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 mb-3 leading-relaxed">{af.description}</p>
                <div
                  className="flex items-center justify-center gap-1 text-sm font-bold py-2 rounded-md transition-all group-hover:brightness-110"
                  style={{ backgroundColor: af.color, color: '#fff', boxShadow: `0 2px 8px ${af.color}40` }}
                >
                  今すぐチェック
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Title List */}
      <div className="cinema-card p-5">
        <h3 className="text-sm font-black text-[#00d4ff] mb-4 flex items-center gap-2">
          &#9670; 作品一覧
        </h3>
        <div className="space-y-0.5">
          {titleList.map(t => (
            <Link
              key={t.slug}
              href={`/title/${t.slug}`}
              className="flex items-center gap-2 py-1.5 px-2 rounded text-sm text-gray-500 hover:bg-[#1c1c2a] hover:text-white transition-colors"
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: t.coverColor }} />
              {t.title}
              <span className="ml-auto text-[10px] text-gray-600">
                {TYPE_LABELS[t.type]}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
