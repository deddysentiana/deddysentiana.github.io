<script lang="ts">
  import { onMount } from "svelte"
  import gsap from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  let section: HTMLElement

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger)

    let ctx = gsap.context(() => {
      gsap.set(".reveal-projects", { opacity: 0, y: 20 })

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () =>
          gsap.to(".reveal-projects", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            overwrite: "auto",
          }),
        onLeave: () =>
          gsap.to(".reveal-projects", {
            y: -20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.in",
            overwrite: "auto",
          }),
        onEnterBack: () =>
          gsap.to(".reveal-projects", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            overwrite: "auto",
          }),
        onLeaveBack: () =>
          gsap.to(".reveal-projects", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.in",
            overwrite: "auto",
          }),
      })
    }, section)

    return () => {
      ctx.revert()
    }
  })
</script>

<section bind:this={section} id="projects" class="px-10 py-20" style="background-color: var(--paper);">
  <!-- Section header -->
  <div class="text-center mb-12">
    <p class="reveal-projects font-serif text-[0.6rem] uppercase tracking-[0.3em] text-(--ink-muted)">
      — Portfolio —
    </p>
    <h2 class="reveal-projects font-serif text-5xl font-black text-(--ink)">
      Featured Projects
    </h2>
    <div class="reveal-projects flex items-center gap-3 mt-2">
      <div class="flex-1 h-0.75 bg-(--ink)"></div>
      <span class="text-(--ink-muted) text-sm">✦</span>
      <div class="flex-1 h-0.75 bg-(--ink)"></div>
    </div>
  </div>

  <!-- "Coming Soon" message -->
  <div class="max-w-2xl mx-auto text-center">
    <div class="reveal-projects p-8" style="border: 1px dashed var(--ink-muted);">
      <h3 class="font-serif text-2xl font-bold text-(--ink)">Work in Progress</h3>
      <p class="mt-4 font-serif text-base leading-relaxed text-(--ink)">
        The workshop is buzzing, and new creations are taking shape. This section will soon be filled with a collection of my latest projects. Stay tuned for the grand unveiling!
      </p>
    </div>
  </div>
</section>