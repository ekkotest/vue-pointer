const calculate = (e: PointerEvent, el: HTMLElement) => {
  const offset = el.getBoundingClientRect();

  const localX = e.clientX - offset.left;
  const localY = e.clientY - offset.top;

  let radius =
    Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) *
    Math.sin((Math.PI * 90) / 360);

  const x = localX - radius;
  const y = localY - radius;

  return { radius, x, y };
};

// 点击涟漪
export function rippleShow(e: PointerEvent, el: HTMLElement) {
  const container = document.createElement("span");
  const animation = document.createElement("span");

  container.appendChild(animation);
  container.className = "v-ripple__container";

  const { radius, x, y } = calculate(e, el);
  const size = `${radius * 2}px`;
  el.appendChild(container);

  const computed = window.getComputedStyle(el);
  if (computed && computed.position === "static") {
    el.style.position = "relative";
    el.dataset.previousPosition = "static";
  }
  animation.className = "v-ripple__animation";
  animation.dataset.activated = String(performance.now());
  animation.style.width = size;
  animation.style.height = size;
  animation.style.left = x + "px";
  animation.style.top = y + "px";

  animation.addEventListener("animationend", (e) => {
    el.removeChild(container);
  });
}
