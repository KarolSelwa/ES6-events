(()=>{document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".gallery__item").forEach((e=>{e.dataset.sliderGroupName=Math.random()>.5?"nice":"good"})),e()}));const e=function(){const e=".gallery__item",s=document.querySelectorAll(e),i=document.querySelector(".js-slider");t(s,i),r(s,i,e)},t=function(e,t){e.forEach((function(e){e.addEventListener("click",(function(e){s(e.currentTarget,"js-slider-img-click")}))}));const r=t.querySelector(".js-slider__nav--next");r&&r.addEventListener("click",(function(e){s(t,"js-slider-img-next")}));const i=t.querySelector(".js-slider__nav--prev");i&&i.addEventListener("click",(function(e){s(t,"js-slider-img-prev")}));const c=t.querySelector(".js-slider__zoom");c&&c.addEventListener("click",(function(e){e.target===e.currentTarget&&s(t,"js-slider-close")}))},s=function(e,t){console.log(e.className,"=>",t);const s=new CustomEvent(t,{bubbles:!0});e.dispatchEvent(s)},r=function(e,t,s){e.forEach((function(e){e.addEventListener("js-slider-img-click",(function(e){i(e,t,s)}))})),t.addEventListener("js-slider-img-next",c),t.addEventListener("js-slider-img-prev",n),t.addEventListener("js-slider-close",o)},i=function(e,t,s){t.classList.add("js-slider--active");const r=e.currentTarget.querySelector("img").src;t.querySelector(".js-slider__image").src=r;const i=e.currentTarget.dataset.sliderGroupName,c=document.querySelectorAll(s+"[data-slider-group-name="+i+"]"),n=document.querySelector(".js-slider__thumbs-item--prototype");c.forEach((e=>{const t=n.cloneNode(!0);t.classList.remove("js-slider__thumbs-item--prototype");const s=t.querySelector("img");s.src=e.querySelector("img").src,s.src===r&&s.classList.add("js-slider__thumbs-image--current"),document.querySelector(".js-slider__thumbs").appendChild(t)}))},c=function(e){console.log(this,"onImageNext");const t="js-slider__thumbs-image--current",s=this.querySelector("."+t),r=s.parentElement.nextElementSibling;if(r&&!r.className.includes("js-slider__thumbs-item--prototype")){const e=r.querySelector("img");e.classList.add(t),this.querySelector(".js-slider__image").src=e.src,s.classList.remove(t)}},n=function(e){console.log(this,"onImagePrev");const t="js-slider__thumbs-image--current",s=this.querySelector("."+t),r=s.parentElement.previousElementSibling;if(r&&!r.className.includes("js-slider__thumbs-item--prototype")){const e=r.querySelector("img");e.classList.add(t),this.querySelector(".js-slider__image").src=e.src,s.classList.remove(t)}},o=function(e){e.currentTarget.classList.remove("js-slider--active"),this.querySelectorAll(".js-slider__thumbs-item:not(.js-slider__thumbs-item--prototype)").forEach((e=>e.parentElement.removeChild(e)))}})();