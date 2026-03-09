import { Article, ArticleCategory } from './types';

import { articles as kimiNoNaWaArticles } from '@/data/articles/kimi-no-na-wa';
import { articles as spiritedAwayArticles } from '@/data/articles/spirited-away';
import { articles as demonSlayerMugenArticles } from '@/data/articles/demon-slayer-mugen-train';
import { articles as slamDunkArticles } from '@/data/articles/slam-dunk-first';
import { articles as suzumeArticles } from '@/data/articles/suzume';
import { articles as shinEvaArticles } from '@/data/articles/shin-evangelion';
import { articles as onePieceRedArticles } from '@/data/articles/one-piece-film-red';
import { articles as jujutsuKaisen0Articles } from '@/data/articles/jujutsu-kaisen-0';
import { articles as rrrArticles } from '@/data/articles/rrr';
import { articles as oppenheimerArticles } from '@/data/articles/oppenheimer';
import { articles as vivantArticles } from '@/data/articles/vivant';
import { articles as hanzawaArticles } from '@/data/articles/hanzawa-naoki';
import { articles as nigeruArticles } from '@/data/articles/nigeru-wa-haji';
import { articles as squidGameArticles } from '@/data/articles/squid-game';
import { articles as breakingBadArticles } from '@/data/articles/breaking-bad';
import { articles as itaewonArticles } from '@/data/articles/itaewon-class';
import { articles as strangerThingsArticles } from '@/data/articles/stranger-things';
import { articles as kamakuraArticles } from '@/data/articles/kamakura-dono';
import { articles as attackOnTitanArticles } from '@/data/articles/attack-on-titan';
import { articles as oshiNoKoArticles } from '@/data/articles/oshi-no-ko';

const allArticles: Article[] = [
  ...kimiNoNaWaArticles,
  ...spiritedAwayArticles,
  ...demonSlayerMugenArticles,
  ...slamDunkArticles,
  ...suzumeArticles,
  ...shinEvaArticles,
  ...onePieceRedArticles,
  ...jujutsuKaisen0Articles,
  ...rrrArticles,
  ...oppenheimerArticles,
  ...vivantArticles,
  ...hanzawaArticles,
  ...nigeruArticles,
  ...squidGameArticles,
  ...breakingBadArticles,
  ...itaewonArticles,
  ...strangerThingsArticles,
  ...kamakuraArticles,
  ...attackOnTitanArticles,
  ...oshiNoKoArticles,
];

export function getAllArticles(): Article[] {
  return allArticles.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find(a => a.slug === slug);
}

export function getArticlesByTitle(titleSlug: string): Article[] {
  return allArticles
    .filter(a => a.titleSlug === titleSlug)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return allArticles
    .filter(a => a.category === category)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getRelatedArticles(article: Article, limit = 5): Article[] {
  const sameTitle = allArticles.filter(
    a => a.titleSlug === article.titleSlug && a.slug !== article.slug
  );
  const sameCategory = allArticles.filter(
    a =>
      a.category === article.category &&
      a.titleSlug !== article.titleSlug &&
      a.slug !== article.slug
  );
  const related = [...sameTitle, ...sameCategory];
  return related.slice(0, limit);
}

export function getPopularArticles(limit = 10): Article[] {
  return getAllArticles().slice(0, limit);
}

export function getAllSlugs(): string[] {
  return allArticles.map(a => a.slug);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return allArticles.filter(
    a =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some(t => t.toLowerCase().includes(q))
  );
}
