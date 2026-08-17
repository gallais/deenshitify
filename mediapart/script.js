// ==UserScript==
// @name     Mediapart comment filter
// @version  1
// @match    https://www.mediapart.fr/journal/*/commentaires
// @grant    none
// ==/UserScript==

// List of the blocked accounts' IDs
const blocked =
  [
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
