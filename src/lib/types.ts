export type ArticleCategory = 'review' | 'analysis' | 'theory' | 'comparison' | 'ranking';

export interface ArticleSection {
  heading: string;
  content: string;
}

export interface Article {
  slug: string;
  title: string;
  titleSlug: string;
  category: ArticleCategory;
  excerpt: string;
  sections: ArticleSection[];
  tags: string[];
  publishedAt: string;
  relatedSlugs?: string[];
}

export type TitleType = 'movie' | 'drama' | 'anime';

export interface TitleInfo {
  slug: string;
  title: string;
  titleEn: string;
  type: TitleType;
  year: number;
  genre: string[];
  description: string;
  coverColor: string;
  director?: string;
  cast?: string[];
}

export const CATEGORY_LABELS: Record<ArticleCategory, string> = {
  review: '映画レビュー・感想',
  analysis: '考察・伏線解説',
  theory: 'ファン理論・未解決の謎',
  comparison: '原作比較・他作品比較',
  ranking: 'ランキング・おすすめ',
};

export const CATEGORY_COLORS: Record<ArticleCategory, string> = {
  review: 'bg-red-500/20 text-red-300 border border-red-500/30',
  analysis: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
  theory: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
  comparison: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
  ranking: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
};

export const TYPE_LABELS: Record<TitleType, string> = {
  movie: '映画',
  drama: 'ドラマ',
  anime: 'アニメ',
};
