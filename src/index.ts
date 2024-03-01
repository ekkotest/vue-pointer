import "./index.css";
import { DirectiveBinding } from "vue";
import { rippleShow } from "./ripple/ripple";
import { waveShow } from "./wave/wave";
import './wave/wave.css'
import './ripple/ripple.css'
import './scale/scale.css'
const eventMap = new Map<HTMLElement, DirectiveBinding>();
// pc端mouse 移动端touch 统一标准pinter
let currentDom: HTMLElement;
document.body.addEventListener("pointerdown", (e) => {
  const dom = e.target as HTMLElement;
  for (let [el, binding] of eventMap) {
    if (el.contains(dom)) {
      currentDom = el;
      if(binding.modifiers.ripple) rippleShow(e, el);
      if(binding.modifiers.wave) waveShow(e,el)
      break;
    }
  }
});
document.body.addEventListener("pointerup", (eshrink) => {});
// 移动端才触发
document.body.addEventListener("pointercancel", (e) => {});

/**
 * @description: v-ripple.ripple 涟漪，目前行内元素无效
 * @description: v-ripple: 抖动
 * @param {HTMLElement} el
 * @param {DirectiveBinding} binding
 */
function directive(el: HTMLElement, binding: DirectiveBinding, vnode) {
  eventMap.set(el, binding);
}

function unmounted(el: HTMLElement) {
  eventMap.delete(el);
}

export const Ripple = {
  mounted: directive,
  unmounted,
};

export default Ripple;
