import { TitleInfo } from '@/lib/types';

export interface VODLink {
  service: string;
  label: string;
  url: string;
  badge?: string;
}

export function getVODLinks(title: TitleInfo): VODLink[] {
  const links: VODLink[] = [];
  const q = encodeURIComponent(title.title);

  links.push({
    service: 'unext',
    label: 'U-NEXTで観る',
    url: `https://video.unext.jp/search/title?query=${q}`,
    badge: '31日間無料',
  });

  links.push({
    service: 'amazon',
    label: 'Amazon Prime Videoで観る',
    url: `https://www.amazon.co.jp/s?k=${q}&i=instant-video`,
    badge: '30日間無料',
  });

  links.push({
    service: 'netflix',
    label: 'Netflixで観る',
    url: `https://www.netflix.com/search?q=${q}`,
    badge: '独占配信多数',
  });

  links.push({
    service: 'disney',
    label: 'Disney+で観る',
    url: `https://www.disneyplus.com/ja-jp/search/${q}`,
    badge: 'ここだけ',
  });

  links.push({
    service: 'hulu',
    label: 'Huluで観る',
    url: `https://www.hulu.jp/search?q=${q}`,
    badge: '日テレ系充実',
  });

  links.push({
    service: 'lemino',
    label: 'Leminoで観る',
    url: `https://lemino.docomo.ne.jp/search?query=${q}`,
    badge: '初月無料',
  });

  links.push({
    service: 'abema',
    label: 'ABEMAプレミアムで観る',
    url: `https://abema.tv/search?q=${q}`,
    badge: '2週間無料',
  });

  links.push({
    service: 'dmm',
    label: 'DMM TVで観る',
    url: `https://tv.dmm.com/search?query=${q}`,
    badge: '月額550円',
  });

  return links;
}

export const generalAffiliates = [
  {
    title: 'U-NEXT',
    description: '見放題作品数No.1。31日間無料トライアルで映画・ドラマ・アニメが見放題。600円分のポイント付き。',
    url: 'https://video.unext.jp/',
    badge: '31日間無料',
    color: '#00c8ff',
  },
  {
    title: 'Amazon Prime Video',
    description: 'Amazonプライム会員なら追加料金なし。オリジナル作品も充実。30日間無料体験あり。',
    url: 'https://www.amazon.co.jp/gp/video/offers',
    badge: '30日間無料',
    color: '#00a8e1',
  },
  {
    title: 'Netflix',
    description: '世界最大級の動画配信サービス。オリジナル作品の質と量は他を圧倒。全世界2億人以上が利用。',
    url: 'https://www.netflix.com/',
    badge: '独占配信多数',
    color: '#e50914',
  },
  {
    title: 'Disney+',
    description: 'ディズニー、ピクサー、マーベル、スター・ウォーズが見放題。ここでしか観られない作品が豊富。',
    url: 'https://www.disneyplus.com/',
    badge: 'ここだけ',
    color: '#0063e5',
  },
  {
    title: 'Hulu',
    description: '日テレ系ドラマの見逃し配信が充実。海外ドラマのラインナップも豊富。月額1,026円。',
    url: 'https://www.hulu.jp/',
    badge: '日テレ系充実',
    color: '#1ce783',
  },
  {
    title: 'Lemino',
    description: 'NTTドコモ運営。韓国ドラマに強く、独占配信も多数。初月無料キャンペーン実施中。',
    url: 'https://lemino.docomo.ne.jp/',
    badge: '初月無料',
    color: '#ff6b35',
  },
  {
    title: 'ABEMAプレミアム',
    description: 'テレビ朝日系コンテンツが充実。アニメの最速配信も。2週間の無料トライアルあり。',
    url: 'https://abema.tv/',
    badge: '2週間無料',
    color: '#36d98c',
  },
  {
    title: 'DMM TV',
    description: 'アニメに特化した月額550円の格安サービス。DMMポイントも使えてコスパ最強。',
    url: 'https://tv.dmm.com/',
    badge: '月額550円',
    color: '#ff3366',
  },
];
