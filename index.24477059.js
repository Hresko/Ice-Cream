(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),n=document.querySelector(".js-menu-links"),o=()=>{const n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),document.querySelector("body").style.overflow=n?"unset":"hidden"};e.addEventListener("click",o),n.addEventListener("click",o)})();
//# sourceMappingURL=index.24477059.js.map