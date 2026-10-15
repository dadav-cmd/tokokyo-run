// サイト共通ナビ。<header id="sitenav" data-page="home|map|sights|guide|season"> に描画する
(function(){
  const host=document.getElementById("sitenav"); if(!host) return;
  const cur=host.dataset.page;
  const I={
    home:'<path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z"/>',
    map:'<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21z"/><circle cx="12" cy="10" r="2.3"/>',
    sights:'<path d="M4 20h16M5 20V9l7-4 7 4v11M9 20v-6h6v6"/>',
    guide:'<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11"/>',
    season:'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>'
  };
  const items=[["home","./","ホーム","ホーム"],["map","map.html","コースマップ","コース"],["sights","sights.html","名所と歴史","名所"],
    ["guide","guide.html","走り方ガイド","ガイド"],["season","season.html","季節カレンダー","季節"]];
  host.className="sitenav";
  host.innerHTML='<div class="in"><a class="brand" href="./">皇居ラン<span>マップ</span></a><nav aria-label="サイト内">'+
    items.map(([k,h,t,s])=>`<a href="${h}"${k===cur?' aria-current="page"':''}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[k]}</svg><span class="full">${t}</span><span class="short">${s}</span></a>`).join("")+
    '</nav></div>';
})();
