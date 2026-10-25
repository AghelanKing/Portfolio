"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type OrbitingCirclesProps = React.ComponentProps<"div"> & {
  /** Radius of the orbit in pixels. */
  radius?: number
  /** Seconds for one full orbit. */
  duration?: number
  /** Orbit counter-clockwise. */
  reverse?: boolean
  /** Draw the circular track the items travel on. */
  path?: boolean
  /** Width and height of each orbiting item in pixels. */
  iconSize?: number
  /** Angle in degrees where the first item starts; the rest are spaced evenly. */
  startAngle?: number
}

function OrbitingCircles({
  radius = 120,
  duration = 24,
  reverse = false,
  path = true,
  iconSize = 40,
  startAngle = -90,
  className,
  children,
  ...props
}: OrbitingCirclesProps) {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const items = React.Children.toArray(children)
  const count = items.length

  React.useEffect(() => {
    const root = rootRef.current
    if (!root || typeof root.animate !== "function") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const turn = reverse ? -360 : 360
    const animations = Array.from(root.querySelectorAll<HTMLElement>("[data-slot=orbiting-circles-item]")).map(
      (node, i) => {
        const angle = startAngle + (360 / Math.max(count, 1)) * i
        // Rotate out, translate to the rim, rotate back: the item orbits but stays upright.
        return node.animate(
          [
            { transform: `rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)` },
            { transform: `rotate(${angle + turn}deg) translateX(${radius}px) rotate(${-angle - turn}deg)` },
          ],
          { duration: duration * 1000, iterations: Infinity, easing: "linear" }
        )
      }
    )
    let visible = true
    const sync = () => {
      for (const a of animations) {
        if (visible && !document.hidden) a.play()
        else a.pause()
      }
    }
    const io = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true
      sync()
    })
    io.observe(root)
    document.addEventListener("visibilitychange", sync)
    return () => {
      io.disconnect()
      document.removeEventListener("visibilitychange", sync)
      for (const a of animations) a.cancel()
    }
  }, [radius, duration, reverse, startAngle, count])

  return (
    <div
      ref={rootRef}
      data-slot="orbiting-circles"
      className={cn("pointer-events-none absolute inset-0 flex items-center justify-center", className)}
      {...props}
    >
      {path && (
        <svg
          aria-hidden="true"
          data-slot="orbiting-circles-path"
          className="absolute overflow-visible"
          width={radius * 2}
          height={radius * 2}
        >
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            fill="none"
            strokeWidth={1}
            className="stroke-foreground/10"
            strokeDasharray="2 5"
          />
        </svg>
      )}
      {items.map((child, i) => {
        const angle = startAngle + (360 / Math.max(count, 1)) * i
        return (
          <div
            key={i}
            data-slot="orbiting-circles-item"
            className="pointer-events-auto absolute flex items-center justify-center"
            style={{
              width: iconSize,
              height: iconSize,
              // Static position for the server render and reduced motion; the animation takes over after mount.
              transform: `rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`,
            }}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}

export { OrbitingCircles, type OrbitingCirclesProps }
