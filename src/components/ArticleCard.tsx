import Link from 'next/link';
import { Article, CATEGORY_LABELS, CATEGORY_COLORS } from '@/lib/types';
import { getTitleBySlug } from '@/data/titles';

export default function ArticleCard({ article, showTitle = true }: { article: Article; showTitle?: boolean }) {
  const title = getTitleBySlug(article.titleSlug);

  return (
    <article className="cinema-card group overflow-hidden">
      <div className="h-1" style={{ backgroundColor: title?.coverColor || '#e50914' }} />
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${CATEGORY_COLORS[article.category] || ''}`}>
            {CATEGORY_LABELS[article.category]}
          </span>
          {showTitle && title && (
            <Link
              href={`/title/${title.slug}`}
              className="text-xs text-gray-500 hover:text-[#e50914] transition-colors"
            >
              {title.title}
            </Link>
          )}
          <time className="text-[10px] text-gray-600 ml-auto" dateTime={article.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
          </time>
        </div>

        <Link href={`/article/${article.slug}`}>
          <h3 className="text-base font-bold text-gray-200 group-hover:text-[#e50914] transition-colors leading-snug mb-2 line-clamp-2">
            {article.title}
          </h3>
        </Link>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-3">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          {article.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] text-gray-600 before:content-['#']">
              {tag}
            </span>
          ))}
          <Link
            href={`/article/${article.slug}`}
            className="ml-auto text-xs font-bold text-[#e50914] hover:text-[#f5c518] transition-colors flex items-center gap-1"
          >
            続きを読む
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
