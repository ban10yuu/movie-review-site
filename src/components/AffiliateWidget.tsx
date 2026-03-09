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

export default function AffiliateWidget({ titleInfo }: { titleInfo: TitleInfo }) {
  const links = getVODLinks(titleInfo);

  return (
    <div className="cinema-card !border-[#f5c518] p-5 md:p-6 my-8">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg">&#127909;</span>
        <h3 className="text-base font-black text-[#f5c518]">
          &lsquo;{titleInfo.title}&rsquo;を観るなら
        </h3>
      </div>
      <p className="text-xs text-gray-500 mb-5">各サービスの無料体験を利用してお得に視聴できます</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((link, i) => {
          const color = SERVICE_COLORS[link.service] || '#f5c518';
          return (
            <a
              key={link.service}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="relative block overflow-hidden rounded-lg group transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-black/40"
            >
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: `linear-gradient(135deg, ${color} 0%, transparent 70%)` }}
              />
              <div className="relative bg-[#18182a] border border-[#282838] group-hover:border-[#383850] rounded-lg p-4">
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"
                  style={{ backgroundColor: color }}
                />
                {link.badge && (
                  <span
                    className="inline-block text-[11px] font-black px-2 py-0.5 rounded-full text-white mb-2"
                    style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}50` }}
                  >
                    {link.badge}
                  </span>
                )}
                <div className="font-bold text-sm text-white mb-3 pl-1">
                  {link.label}
                </div>
                <div
                  className="flex items-center justify-center gap-1 text-xs font-black py-2 rounded-md text-white transition-all group-hover:brightness-110"
                  style={{ backgroundColor: color, boxShadow: `0 2px 8px ${color}40` }}
                >
                  無料で試してみる
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              {i === 0 && (
                <div className="absolute top-0 right-0 bg-[#f5c518] text-[#0a0a12] text-[9px] font-black px-2 py-0.5 rounded-bl-lg rounded-tr-lg">
                  人気 No.1
                </div>
              )}
            </a>
          );
        })}
      </div>

      <p className="text-[10px] text-gray-600 mt-4 text-center">
        ※ 当サイトはアフィリエイトプログラムに参加しています
      </p>
    </div>
  );
}
