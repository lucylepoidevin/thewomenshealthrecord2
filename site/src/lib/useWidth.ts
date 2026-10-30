import { useEffect, useRef, useState } from 'react'

/** Measured width of a container, so SVG text can stay at real pixel sizes on every screen. */
export function useWidth<T extends HTMLElement>(fallback = 640) {
  const ref = useRef<T>(null)
  const [w, setW] = useState(fallback)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(entries => { const cw = entries[0]?.contentRect.width; if (cw) setW(Math.max(280, Math.round(cw))) })
    ro.observe(el)
    setW(Math.max(280, Math.round(el.getBoundingClientRect().width) || fallback))
    return () => ro.disconnect()
  }, [fallback])
  return { ref, w }
}
