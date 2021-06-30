const createText = (el, text) => {
  const textNode = document.createTextNode(text)
  el.appendChild(textNode)
}

const appendChildren = (el, children) => {
  children.forEach((child) => {
    if (Array.isArray(child)) {
      appendChildren(el, child)
    } else if (typeof child === 'string' || typeof child === 'number') {
      el.appendChild(document.createTextNode(child))
    } else if (child instanceof window.Element) {
      el.appendChild(child)
    }
  })
}

const createElement = (type, props, ...children) => {
  const el = document.createElement(type)

  if (Array.isArray(props)) {
    appendChildren(el, [...props, ...children])
  } else if (
    typeof props === 'string' ||
    typeof props === 'number' ||
    props instanceof window.Element
  ) {
    appendChildren(el, [props, ...children])
  } else if (typeof props === 'object') {
    Object.keys(props).forEach((prop) => {
      el[prop] = props[prop]
    })
    appendChildren(el, children)
  }

  return el
}

const div = (...args) => createElement('div', ...args)
const ul = (...args) => createElement('ul', ...args)
const li = (...args) => createElement('li', ...args)
const h1 = (...args) => createElement('h1', ...args)
const h2 = (...args) => createElement('h2', ...args)
const h3 = (...args) => createElement('h3', ...args)
const p = (...args) => createElement('p', ...args)
const span = (...args) => createElement('span', ...args)
const a = (...args) => createElement('a', ...args)

const render = (component, root) => {
  root.appendChild(component)
}
