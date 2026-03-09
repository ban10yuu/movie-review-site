import { TitleInfo } from '@/lib/types';
import { getVODLinks } from '@/data/affiliates';

const SERVICE_COLORS: Record<string, string> = {
  unext: '#00c8ff',
  amazon: '#00a8e1',
  netflix: '#e50914',
  disney: '#0063e5',
  hulu: '#1ce783',
  lemino: '#ff6b35',
  abema: '#36d98c',
  dmm: '#ff3366',
};

const SERVICE_TAGLINES: Record<string, string> = {
  unext: '見放題作品数No.1！31日間無料＋600pt',
  amazon: 'プライム会員なら追加料金なし',
  netflix: '世界最大級の動画配信サービス',
  disney: 'ディズニー・マーベルが見放題',
  hulu: '日テレ系の見逃し配信が充実',
  lemino: '韓国ドラマに強い！初月無料',
  abema: 'テレ朝系コンテンツ充実',
  dmm: 'アニメ特化の月額550円',
};

export default function AdBanner({
  titleInfo,
  variant = 0,
  size = 'full',
}: {
  titleInfo?: TitleInfo;
  variant?: number;
  size?: 'full' | 'medium' | 'compact';
}) {
  const links = titleInfo ? getVODLinks(titleInfo) : [];
  const link = links[variant % links.length];
  if (!link) return null;

  const color = SERVICE_COLORS[link.service] || '#f5c518';
  const tagline = SERVICE_TAGLINES[link.service] || '';
  const name = titleInfo ? titleInfo.title : '';

  if (size === 'compact') {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="block my-6 relative overflow-hidden rounded-lg group hover:scale-[1.01] transition-all"
      >
        <div className="relative border border-[#282838] group-hover:border-[#383850] rounded-lg overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(90deg, ${color} 0%, transparent 50%)` }} />
          <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: color }} />
          <div className="relative flex items-center gap-4 px-5 py-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] text-gray-600">PR</span>
                <span className="text-sm font-bold text-white">{link.label.replace('で観る', '')}</span>
              </div>
              <p className="text-xs text-gray-500 truncate">{tagline}</p>
            </div>
            {link.badge && (
              <span className="text-xs font-black text-white px-3 py-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}50` }}>
                {link.badge}
              </span>
            )}
          </div>
        </div>
      </a>
    );
  }

  // full
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="block my-8 relative overflow-hidden rounded-xl group hover:shadow-xl hover:shadow-black/40 transition-all"
    >
      <div className="relative border-2 border-[#282838] group-hover:border-[#383850] rounded-xl overflow-hidden">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${color}20 0%, ${color}05 40%, transparent 70%)` }} />
        <div className="relative p-5 md:p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}80` }} />
              <span className="text-xs font-bold text-gray-500">PR</span>
            </div>
            <div className="text-lg md:text-xl font-black text-white mb-1">{link.label.replace('で観る', '')}</div>
            <p className="text-sm text-gray-400 mb-3">{tagline}</p>
            {name && <p className="text-xs text-gray-500">&lsquo;{name}&rsquo;を今すぐ視聴</p>}
          </div>
          <div className="flex flex-col items-center gap-3 flex-shrink-0">
            {link.badge && (
              <div className="text-xl md:text-2xl font-black text-white px-4 py-2 rounded-lg" style={{ backgroundColor: color, boxShadow: `0 4px 20px ${color}50` }}>
                {link.badge}
              </div>
            )}
            <div className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-black text-white transition-all group-hover:brightness-110 group-hover:scale-105" style={{ backgroundColor: color, boxShadow: `0 2px 12px ${color}40` }}>
              今すぐチェック
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
