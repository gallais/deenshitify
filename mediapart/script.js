// ==UserScript==
// @name     Mediapart comment filter
// @version  1
// @match    https://www.mediapart.fr/journal/*/commentaires
// @grant    none
// ==/UserScript==

// List of the blocked accounts' IDs
const blocked =
  [ "1070312"
  , "1105311"
  , "1115505"
  , "1116831"
  , "1146889"
  , "142673"
  , "1466252"
  , "147071"
  , "1492254"
  , "1499338"
  , "1533619"
  , "155412"
  , "1562694"
  , "1566568"
  , "1567489"
  , "1577182"
  , "1601952"
  , "1619258"
  , "1640062"
  , "1739200"
  , "174702"
  , "1749217"
  , "1785968"
  , "1794874"
  , "193184"
  , "234498"
  , "237527"
  , "27079"
  , "321764"
  , "367755"
  , "426429"
  , "435025"
  , "437258"
  , "497532"
  , "589838"
  , "589933"
  , "62342"
  , "652793"
  , "65585"
  , "66804"
  , "711236"
  , "737647"
  , "951991"
  , "984003"
  , "99735"
  ];

(function() {
  const cmts = document.querySelectorAll('div[data-comment-id]');
  cmts.forEach( (cmt) => {
    let uid = cmt.getAttribute('data-author-uid');
    if (blocked.includes(uid)) {
      cmt.setAttribute('style', 'display: none');
    } else {
      let link = cmt.querySelector('a[rel="author"]');
      if (link) {
        let author = link.innerText;
        if (! author.includes('🆔')) {
          link.innerHTML = author + " - 🆔 " + uid;
        };
      };
    };
  });
})();
