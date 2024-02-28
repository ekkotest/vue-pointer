import './index.css'
import { DirectiveBinding } from 'vue'

const calculate = (e: PointerEvent, el: HTMLElement) => {
  const offset = el.getBoundingClientRect()

  const localX = e.clientX - offset.left
  const localY = e.clientY - offset.top

  let radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) * Math.sin((Math.PI * 90) / 360)

  const x = localX - radius
  const y = localY - radius

  return { radius, x, y }
}

// 点击涟漪
function rippleShow(e: PointerEvent, el: HTMLElement) {
  const container = document.createElement('span')
  const animation = document.createElement('span')

  container.appendChild(animation)
  container.className = 'v-ripple__container'

  const { radius, x, y } = calculate(e, el)
  const size = `${radius * 2}px`
  el.appendChild(container)

  const computed = window.getComputedStyle(el)
  if (computed && computed.position === 'static') {
    el.style.position = 'relative'
    el.dataset.previousPosition = 'static'
  }
  animation.className = 'v-ripple__animation'
  animation.dataset.activated = String(performance.now())
  animation.style.width = size
  animation.style.height = size
  animation.style.left = x + 'px'
  animation.style.top = y + 'px'

  animation.addEventListener('animationend', (e) => {
    el.removeChild(container)
  })
}

// 抖动开启
function shrinkShow(element: HTMLElement) {
  element.dataset.pressed = 'true'
}
// 抖动停止
function shrinkHide(element: HTMLElement | null) {
  if (element) element.dataset.pressed = 'false'
}
const eventMap = new Map<HTMLElement, DirectiveBinding>()
// pc端mouse 移动端touch 统一标准pinter
let currentDom: HTMLElement
document.body.addEventListener('pointerdown', (e) => {
  const dom = e.target as HTMLElement
  for (let [el, binding] of eventMap) {
    if (el.contains(dom)) {
      currentDom = el
      if (binding.modifiers.ripple) {
        rippleShow(e, el)
      }
      shrinkShow(el)
      break
    }
  }
})
document.body.addEventListener('pointerup', (e) => {
  shrinkHide(currentDom)
})
// 移动端才触发
document.body.addEventListener('pointercancel', (e) => {
  shrinkHide(currentDom)
})

/**
 * @description: v-ripple.ripple 涟漪，目前行内元素无效
 * @description: v-ripple: 抖动
 * @param {HTMLElement} el
 * @param {DirectiveBinding} binding
 */
function directive(el: HTMLElement, binding: DirectiveBinding,vnode) {
  el.className += ' v-ripple__shrink' // to do: span block标签有些情况会失效
  // vnode.props.class += ' v-ripple__shrink'
  eventMap.set(el, binding)
}

function unmounted(el: HTMLElement) {
  eventMap.delete(el)
}

export const Ripple = {
  mounted: directive,
  unmounted
}

export default Ripple
