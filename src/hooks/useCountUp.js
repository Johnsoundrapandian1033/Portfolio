import { useEffect, useRef, useState } from 'react'

export function useCountUp(target, { duration = 1400, start = false } = {}) {
  const [value, setValue] = useState(0)
  const raf = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!start || startedRef.current) return
    startedRef.current = true

    const startTime = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        raf.current = requestAnimationFrame(tick)
      }
    }
    raf.current = requestAnimationFrame(tick)
    return () => raf.current && cancelAnimationFrame(raf.current)
  }, [start, target, duration])

  return value
}
