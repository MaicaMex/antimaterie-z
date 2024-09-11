(() => {
  // <stdin>
  (function() {
    "use strict";
    document.addEventListener("DOMContentLoaded", function() {
      renderMathInElement(document.body, {
        delimiters: [
          { left: "\\[", right: "\\]", display: true },
          // block
          { left: "$$", right: "$$", display: true },
          // block
          { left: "\\(", right: "\\)", display: false },
          // inline
          { left: "$", right: "$", display: false }
          // inline
        ],
        throwOnError: false
      });
    });
  })();
})();
