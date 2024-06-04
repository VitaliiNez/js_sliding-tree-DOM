document.querySelectorAll("li").forEach(function(e){var n=document.createElement("span");1!==e.childNodes.length&&(e.prepend(n),n.append(n.nextSibling));var l=n.nextElementSibling;l&&l.closest("ul")&&n.addEventListener("click",function(){var e=l.closest("ul");e&&(e.hidden=!e.hidden)})});
//# sourceMappingURL=index.84ba3a63.js.map
