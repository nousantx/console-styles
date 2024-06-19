/**
 * style-logger.js
 *
 * A simple javascript code that can showed the styles that currently applied to the element.
 *
 * If you use `tenoxui/css`, it can show you the generated style from the element's class name.
 */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach(element => {
    // Show inline styles from the element
    if (element.style.cssText) {
      console.log(element.outerHTML, "Inline Styles:", element.style.cssText);
    }
    // console logging the styles from document's stylesheet
    [...document.styleSheets].forEach(sheet => {
      try {
        [...sheet.cssRules].forEach(rule => {
          if (element.matches(rule.selectorText)) {
            console.log(element.outerHTML, "Class Styles:", rule.cssText);
          }
        });
      } catch (err) {
        /**
         * Sometimes, the error is caused by a CORS policy that blocks the request
         */
        console.warn("Cannot access stylesheet:", sheet.href);
      }
    });
  });
});
