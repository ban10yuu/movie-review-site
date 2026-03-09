import Link from 'next/link';
import { titleList } from '@/data/titles';
import { generalAffiliates } from '@/data/affiliates';

export default function Footer() {
  const movies = titleList.filter(t => t.type === 'movie').slice(0, 8);
  const dramas = titleList.filter(t => t.type === 'drama' || t.type === 'anime').slice(0, 8);

  return (
    <footer className="bg-[#08080e] text-gray-400 border-t-2 border-[#e50914]">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-black text-white mb-4 flex items-center gap-2">
              <span className="text-[#e50914]">&#9658;</span>
              シネマ考察<span className="text-[#e50914]">ラボ</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              映画・ドラマの考察・レビュー・伏線解説をお届けする専門サイトです。
              独自の視点で作品の魅力を深掘りします。
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black text-[#e50914] mb-4 tracking-widest uppercase">映画</h4>
            <ul className="space-y-2">
              {movies.map(t => (
                <li key={t.slug}>
                  <Link href={`/title/${t.slug}`} className="text-sm text-gray-500 hover:text-[#e50914] transition-colors">
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-[#f5c518] mb-4 tracking-widest uppercase">ドラマ・アニメ</h4>
            <ul className="space-y-2">
              {dramas.map(t => (
                <li key={t.slug}>
                  <Link href={`/title/${t.slug}`} className="text-sm text-gray-500 hover:text-[#f5c518] transition-colors">
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-[#00d4ff] mb-4 tracking-widest uppercase">カテゴリ</h4>
            <ul className="space-y-2">
              <li><Link href="/category/review" className="text-sm text-gray-500 hover:text-[#00d4ff] transition-colors">映画レビュー・感想</Link></li>
              <li><Link href="/category/analysis" className="text-sm text-gray-500 hover:text-[#00d4ff] transition-colors">考察・伏線解説</Link></li>
              <li><Link href="/category/theory" className="text-sm text-gray-500 hover:text-[#00d4ff] transition-colors">ファン理論・未解決の謎</Link></li>
              <li><Link href="/category/comparison" className="text-sm text-gray-500 hover:text-[#00d4ff] transition-colors">原作比較・他作品比較</Link></li>
              <li><Link href="/category/ranking" className="text-sm text-gray-500 hover:text-[#00d4ff] transition-colors">ランキング・おすすめ</Link></li>
            </ul>

            <h4 className="text-xs font-black text-gray-500 mt-6 mb-4 tracking-widest uppercase">動画配信</h4>
            <ul className="space-y-2 text-sm">
              {generalAffiliates.slice(0, 4).map(af => (
                <li key={af.title}>
                  <a href={af.url} target="_blank" rel="noopener noreferrer nofollow" className="text-gray-500 hover:text-[#e50914] transition-colors">
                    {af.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#282838] text-center text-xs text-gray-600">
          <p>※ 当サイトの考察は個人の見解であり、公式の情報ではありません。</p>
          <p className="mt-1">※ 当サイトはアフィリエイトプログラムに参加しています。</p>
          <p className="mt-4 text-gray-500">&copy; {new Date().getFullYear()} シネマ考察ラボ</p>
        </div>
      </div>
    </footer>
  );
}
