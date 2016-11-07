import {patterns} from 'hero-patterns'
import {setRandom} from './_hero-set.js'
import throttle from './_throttle.js'

export function scroll (el, arr = patterns, time = 250) {
  setRandom(el, arr)
  window.addEventListener('scroll', throttle(function () {
    setRandom(el, arr)
  }, time))
}

export function rollover (el, arr = patterns, time = 250) {
  setRandom(el, arr)
  el.addEventListener('mousemove', throttle(function () {
    setRandom(el, arr)
  }, time))
}

export function rotate (el, arr = patterns, time = 250) {
  setRandom(el, arr)
  window.setInterval(function () {
    setRandom(el, arr)
  }, time)
}