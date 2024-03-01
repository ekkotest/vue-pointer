
  
  // 点击涟漪
  export function waveShow(e: PointerEvent, el: HTMLElement) {
    // const container = document.createElement("span");
    const animation = document.createElement("span");
  
    el.appendChild(animation);
    // container.className = "v_pointer_wave__container";
  
    // el.appendChild(container);
  
    const computed = window.getComputedStyle(el);
    if (computed && computed.position === "static") {
      el.style.position = "relative";
      el.dataset.previousPosition = "static";
    }
    animation.className = "v_pointer_wave__animation";
    animation.dataset.activated = String(performance.now());


  
    animation.addEventListener("animationend", (e) => {
      // el.removeChild(container);
    });
  }
  