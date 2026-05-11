import { useEffect, useRef, useState } from 'react'

/**
 * Tracks which card is most visible inside the mobile drawer.
 *
 * KEY PERF FIX:
 *   Previous version created ONE IntersectionObserver per card → N observers
 *   → N layout reads on setup → 200ms+ setTimeout handler.
 *
 *   This version creates ONE shared observer that watches all cards.
 *   The callback receives only the entries that actually changed,
 *   so it does far less work per scroll event.
 *
 * @param {number}          count    - Number of cards
 * @param {React.RefObject} rootRef  - Ref to the drawer's scrollable div
 * @param {boolean}         isOpen   - Whether the drawer is open
 */
export function useScrollFocus(count, rootRef, isOpen) {
  const refs = useRef([])
  const [focused, setFocused] = useState(null)

  useEffect(() => {
    if (window.innerWidth >= 1024) return
    if (!isOpen) { setFocused(null); return }

    const scores = new Map()
    let observer = null

    const update = () => {
      let best = null, bestScore = -1
      scores.forEach((score, idx) => {
        if (score > bestScore) { bestScore = score; best = idx }
      })
      setFocused(best)
    }

    // Wait for the 500ms drawer slide-up transition to finish
    const timer = setTimeout(() => {
      // ── ONE observer for ALL cards ───────────────────────────────────────
      // Previously: N observers (one per card) → N layout reads on creation
      // Now: 1 observer → 1 layout read → 10-20× less setup work
      observer = new IntersectionObserver(
        (entries) => {
          // entries = only the cards whose visibility CHANGED this frame
          entries.forEach(entry => {
            const idx = refs.current.indexOf(entry.target)
            if (idx !== -1) scores.set(idx, entry.intersectionRatio)
          })
          update()
        },
        {
          root:      rootRef?.current ?? null,
          // 11 thresholds (0, 0.1 … 1.0) instead of 21 → half the callbacks
          threshold: Array.from({ length: 11 }, (_, i) => i / 10),
          rootMargin: '-10% 0px -10% 0px',
        }
      )

      refs.current.forEach(el => { if (el) observer.observe(el) })
    }, 520)

    return () => {
      clearTimeout(timer)
      if (observer) observer.disconnect()
    }
  }, [count, rootRef, isOpen])

  return { refs, focused }
}