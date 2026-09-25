// ==UserScript==
// @name     Mediapart comment filter
// @version  1
// @match    https://www.mediapart.fr/journal/*/commentaires
// @grant    none
// ==/UserScript==

// List of the blocked accounts' IDs

const blocked =
  [ "1037905"
  , "1048706"
  , "105721"
  , "1070312"
  , "1098758"
  , "1105311"
  , "1115505"
  , "1116831"
  , "1114274"
  , "112747"
  , "1146889"
  , "122010"
  , "131071"
  , "142261"
  , "142673"
  , "1466252"
  , "147071"
  , "1492254"
  , "1499338"
  , "1508226"
  , "1531927"
  , "1533619"
  , "155412"
  , "1562694"
  , "1566568"
  , "1567489"
  , "1577182"
  , "1582227"
  , "1588717"
  , "1601952"
  , "1605067"
  , "1619258"
  , "1640062"
  , "1656729"
  , "1721357"
  , "1732624"
  , "1739858"
  , "1739200"
  , "1745312"
  , "174702"
  , "174721"
  , "1749217"
  , "1778869"
  , "1785968"
  , "1789861"
  , "1790921"
  , "1794874"
  , "1832258"
  , "189493"
  , "190505"
  , "193184"
  , "237527"
  , "29339"
  , "321764"
  , "345461"
  , "386970"
  , "426429"
  , "435025"
  , "437258"
  , "460253"
  , "497532"
  , "589838"
  , "62342"
  , "652793"
  , "65585"
  , "657462"
  , "665287"
  , "66804"
  , "67691"
  , "714792"
  , "737647"
  , "760497"
  , "836081"
  , "841431"
  , "85369"
  , "918965"
  , "951991"
  , "952369"
  , "95240"
  , "997922"
  , "99909"
  ];


(function() {
  const cmts = document.querySelectorAll('div[data-comment-id]');
  cmts.forEach( (cmt) => {
    let uid = cmt.getAttribute('data-author-uid');
    if (blocked.includes(uid)) {
      cmt.setAttribute('style', 'opacity: 10%;');
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
