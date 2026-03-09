import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 text-center relative z-10">
      <h1 className="text-6xl font-black text-[#e50914] mb-4">404</h1>
      <p className="text-xl text-gray-300 mb-2">ページが見つかりません</p>
      <p className="text-sm text-gray-500 mb-8">お探しのページは存在しないか、移動した可能性があります。</p>
      <Link
        href="/"
        className="inline-block bg-[#e50914] text-white px-8 py-3 rounded text-sm font-black hover:bg-[#c5070f] transition-colors"
      >
        トップページに戻る
      </Link>
    </div>
  );
}
