(() => {
  const legacyPageViews = {"/post/10b8d89a.html":546,"/post/11b9531d.html":515,"/post/13f23fc6.html":451,"/post/146254b2.html":1941,"/post/14c043f8.html":377,"/post/165cec8c.html":421,"/post/167905f9.html":294,"/post/183fe2bb.html":308,"/post/187210a7.html":1625,"/post/1b5eb6c5.html":338,"/post/1dda48e6.html":694,"/post/21418325.html":458,"/post/22e56931.html":171,"/post/26429d38.html":842,"/post/2d54fac2.html":491,"/post/342113ee.html":2096,"/post/35967439.html":533,"/post/39588.html":1013,"/post/3abd4221.html":537,"/post/3cd51af7.html":396,"/post/3f46adc9.html":454,"/post/3ff42458.html":619,"/post/4311e802.html":534,"/post/445800a5.html":528,"/post/47440.html":718,"/post/48df397.html":389,"/post/4a67318c.html":1724,"/post/5014defb.html":719,"/post/506fe59c.html":798,"/post/50d33bc8.html":1078,"/post/523698ad.html":540,"/post/549b2003.html":399,"/post/5505a29b.html":572,"/post/5b8f1174.html":396,"/post/601c0957.html":440,"/post/6144f326.html":837,"/post/6452f9a0.html":1318,"/post/65473b07.html":379,"/post/678d5ec.html":565,"/post/67c5a822.html":955,"/post/689431.html":920,"/post/6956167f.html":438,"/post/69eaef2e.html":2084,"/post/6a2afd81.html":675,"/post/6a80d23a.html":290,"/post/6cedf6de.html":393,"/post/6d3f5803.html":337,"/post/6f77578c.html":646,"/post/758dd33a.html":1984,"/post/76af431b.html":771,"/post/77e39860.html":250,"/post/7848573.html":551,"/post/795314c1.html":943,"/post/7a9f0ad2.html":1389,"/post/7be264c5.html":436,"/post/7e90ebcb.html":337,"/post/812dabe5.html":495,"/post/818adfc0.html":531,"/post/83b88224.html":827,"/post/85e9cf6b.html":260,"/post/860541dc.html":568,"/post/87ec16c9.html":728,"/post/8992014.html":591,"/post/8c874679.html":519,"/post/9163155b.html":339,"/post/923bfbdd.html":471,"/post/9388d5f7.html":376,"/post/94c7e291.html":1831,"/post/961bf02b.html":375,"/post/97bbcbc9.html":813,"/post/9b40da15.html":1867,"/post/9c1c22d0.html":1141,"/post/9e021283.html":802,"/post/9e0dbdd4.html":751,"/post/a02848e0.html":702,"/post/a5bd8c0d.html":644,"/post/a6ed3bb1.html":529,"/post/a6ee3e0e.html":1168,"/post/aa501114.html":479,"/post/aba42241.html":451,"/post/afc6e4d2.html":191,"/post/b137586.html":959,"/post/b1a746d0.html":644,"/post/b4a50eee.html":602,"/post/b6d8f66a.html":626,"/post/b73949e0.html":586,"/post/b852ef1b.html":1004,"/post/c2c51200.html":447,"/post/ca5e14eb.html":297,"/post/cb7cb618.html":808,"/post/cbd6cb22.html":494,"/post/ccf22797.html":402,"/post/cd7e8e10.html":791,"/post/ce38099f.html":882,"/post/cf09b856.html":820,"/post/d14a80bb.html":325,"/post/d21bb624.html":923,"/post/d35dc1e9.html":606,"/post/d4b677a0.html":1002,"/post/d5230381.html":198,"/post/d783fbc0.html":422,"/post/d79378e.html":703,"/post/d8d20302.html":173,"/post/df3f7032.html":1434,"/post/df537e5d.html":530,"/post/e052b7cc.html":452,"/post/e06139e7.html":1761,"/post/e1a814d3.html":381,"/post/e3650168.html":285,"/post/e69bccb7.html":460,"/post/e7a88095.html":415,"/post/e7cc42f8.html":966,"/post/e872e217.html":1339,"/post/ea445335.html":2475,"/post/eb2541c3.html":405,"/post/ec560d26.html":547,"/post/ee681ca2.html":496,"/post/ef78e9c1.html":815,"/post/f41d32ca.html":383,"/post/fa6eda6b.html":630,"/post/fbcce62e.html":271};
  let pvObserver = null;

  function updateDisplayedPV() {
    const raw = document.getElementById('busuanzi_value_page_pv');
    const shown = document.getElementById('legacy_value_page_pv');

    if (!raw || !shown) return;

    const current = raw.textContent.trim().replace(/,/g, '');
    if (!/^\d+$/.test(current)) return;

    const base = legacyPageViews[window.location.pathname] || 0;
    shown.textContent = (base + Number(current)).toLocaleString('en-US');
  }

  function bindPV() {
    if (pvObserver) {
      pvObserver.disconnect();
      pvObserver = null;
    }

    const raw = document.getElementById('busuanzi_value_page_pv');
    const shown = document.getElementById('legacy_value_page_pv');

    if (!raw || !shown) return;

    updateDisplayedPV();

    pvObserver = new MutationObserver(updateDisplayedPV);
    pvObserver.observe(raw, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindPV, { once: true });
  } else {
    bindPV();
  }

  document.addEventListener('pjax:success', () => {
    setTimeout(bindPV, 0);
  });
})();