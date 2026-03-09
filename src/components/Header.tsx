'use client';

import Link from 'next/link';
import { useState } from 'react';
import { titleList } from '@/data/titles';
import { CATEGORY_LABELS } from '@/lib/types';
import type { ArticleCategory } from '@/lib/types';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/category/all?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a12]/95 backdrop-blur-md text-white border-b-2 border-[#e50914]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-tight">
            <span className="text-[#e50914] text-2xl leading-none">&#9658;</span>
            <span className="text-white">
              シネマ考察
              <span className="text-[#e50914]">ラボ</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
            <Link href="/" className="text-gray-300 hover:text-[#e50914] transition-colors">
              ホーム
            </Link>
            <div className="group relative">
              <button className="text-gray-300 hover:text-[#e50914] transition-colors flex items-center gap-1">
                作品一覧
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-1 w-64 bg-[#14141e] border-2 border-[#282838] rounded shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 max-h-96 overflow-y-auto">
                {titleList.map(t => (
                  <Link
                    key={t.slug}
                    href={`/title/${t.slug}`}
                    className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#e50914]/10 hover:border-l-2 hover:border-[#e50914] border-l-2 border-transparent transition-all"
                  >
                    {t.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/category/review" className="text-gray-300 hover:text-[#e50914] transition-colors">
              レビュー
            </Link>
            <Link href="/category/analysis" className="text-gray-300 hover:text-[#e50914] transition-colors">
              考察
            </Link>
          </nav>

          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <input
              type="text"
              placeholder="検索..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-40 bg-[#14141e] border border-[#282838] rounded-l px-3 py-1.5 text-sm text-white placeholder-gray-500 outline-none focus:border-[#e50914] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#e50914] px-3 py-1.5 text-sm font-bold rounded-r hover:bg-[#c5070f] transition-colors"
            >
              &#9658;
            </button>
          </form>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-300"
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-[#282838] mt-2 pt-4">
            <form onSubmit={handleSearch} className="flex mb-4">
              <input
                type="text"
                placeholder="検索..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="flex-1 bg-[#14141e] border border-[#282838] rounded-l px-4 py-2 text-sm placeholder-gray-500 outline-none"
              />
              <button type="submit" className="bg-[#e50914] px-4 py-2 text-sm font-bold rounded-r">
                &#9658;
              </button>
            </form>
            <Link href="/" className="block py-2 text-gray-300 hover:text-[#e50914]" onClick={() => setMenuOpen(false)}>
              ホーム
            </Link>
            {(Object.entries(CATEGORY_LABELS) as [ArticleCategory, string][]).map(([key, label]) => (
              <Link key={key} href={`/category/${key}`} className="block py-2 text-gray-300 hover:text-[#e50914]" onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            ))}
            <div className="mt-3 border-t border-[#282838] pt-3">
              <p className="text-xs text-gray-500 mb-2 font-bold">作品一覧</p>
              <div className="grid grid-cols-2 gap-1">
                {titleList.slice(0, 10).map(t => (
                  <Link
                    key={t.slug}
                    href={`/title/${t.slug}`}
                    className="text-sm py-1.5 text-gray-400 hover:text-[#e50914]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
