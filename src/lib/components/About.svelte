<script lang="ts">
  import { onMount } from "svelte"
  import gsap from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"

  let About: HTMLElement

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const animationProps = {
        stagger: 0.1,
        duration: 0.8,
        overwrite: "auto"
      }

      gsap.set(".reveal", {
        opacity: 0,
        y: 20
      })

      ScrollTrigger.create({
        trigger: About,
        start: "top 80%",
        end: "bottom 20%",

        onEnter: () =>
          gsap.to(".reveal", {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            ...animationProps
          }),

        onLeave: () =>
          gsap.to(".reveal", {
            y: -20,
            opacity: 0,
            ease: "power2.in",
            ...animationProps
          }),

        onEnterBack: () =>
          gsap.to(".reveal", {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            ...animationProps
          }),

        onLeaveBack: () =>
          gsap.to(".reveal", {
            y: 20,
            opacity: 0,
            ease: "power2.in",
            ...animationProps
          })
      })
    }, About)

    return () => ctx.revert()
  })
</script>

<section
  bind:this={About}
  id="about"
  class="px-10 py-24"
  style="border-bottom: var(--border-thin) solid var(--ink);"
>
  <div class="max-w-4xl mx-auto">

    <!-- Header -->
    <div class="text-center mb-8">
      <p
        class="reveal font-serif text-[0.65rem] uppercase tracking-[0.35em] text-(--ink-muted)"
      >
        — An Introduction —
      </p>

      <h2
        class="reveal font-serif text-5xl md:text-6xl font-black text-(--ink)"
      >
        About Myself
      </h2>

      <div
        class="reveal flex items-center gap-4 mt-3 max-w-xs mx-auto"
      >
        <div class="flex-1 h-px bg-(--ink-muted)" />
        <span class="text-(--ink-muted)">✦</span>
        <div class="flex-1 h-px bg-(--ink-muted)" />
      </div>
    </div>

    <!-- Byline -->
    <div class="reveal text-center mb-12">
      <p
        class="font-serif text-xs uppercase tracking-[0.25em] text-(--ink-muted)"
      >
        By Deddy Sentiana
      </p>

      <p
        class="font-serif italic text-sm text-(--ink-muted)"
      >
        Informatics Student • First Edition, 2025
      </p>
    </div>

    <!-- Article -->
    <article
      class="reveal max-w-3xl mx-auto font-serif text-(--ink)"
    >
      <p
        class="text-2xl leading-relaxed first-letter:text-8xl first-letter:font-bold first-letter:float-left first-letter:mr-4 first-letter:leading-none"
      >
       I'm an Informatics student who is just beginning my journey in programming and technology. 
       Although I'm still learning the fundamentals, I have a strong curiosity about how software works and how technology can be used to solve real-world problems.
      </p>

      <p class="mt-8 text-xl leading-loose">
        I enjoy the process of turning curiosity into knowledge,
        whether that means learning a new skill, understanding a
        complex concept, or experimenting with different technologies.
      </p>

      <p class="mt-8 text-xl leading-loose">
        I'm always looking for ways to grow, challenge myself, and gain
        new perspectives. More than anything, I believe that staying
        curious and open to learning is what drives both personal and
        professional growth.
      </p>
    </article>

    <!-- Pull Quote -->
    <div class="reveal my-16">
      <div class="flex items-center gap-4">
        <div class="flex-1 h-px bg-(--ink-muted)" />
        <span
          class="font-serif text-xs uppercase tracking-[0.3em] text-(--ink-muted)"
        >
          Editorial Note
        </span>
        <div class="flex-1 h-px bg-(--ink-muted)" />
      </div>

      <blockquote
        class="mt-8 text-center font-serif italic text-2xl md:text-3xl text-(--ink)"
      >
        “Curiosity is where every journey begins.”
      </blockquote>
    </div>

  </div>
</section>