<script lang="ts">
  import { onMount } from "svelte"
  import gsap from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"
  import { Badge } from "$lib/components/ui/badge"

  let section: HTMLElement
  let track: HTMLDivElement

  const logos = [
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Git",        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "C++",        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "React",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Svelte",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
  ]

  const items = [...logos, ...logos, ...logos]

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger)

    let ctx = gsap.context(() => {
      const animationProps = { stagger: 0.1, duration: 0.8, overwrite: "auto" };
      gsap.set(".reveal-skills", { opacity: 0, y: 20 });

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        onEnter:     () => gsap.to(".reveal-skills", { y: 0,   opacity: 1, ease: "power2.out", ...animationProps }),
        onLeave:     () => gsap.to(".reveal-skills", { y: -20, opacity: 0, ease: "power2.in",  ...animationProps }),
        onEnterBack: () => gsap.to(".reveal-skills", { y: 0,   opacity: 1, ease: "power2.out", ...animationProps }),
        onLeaveBack: () => gsap.to(".reveal-skills", { y: 20,  opacity: 0, ease: "power2.in",  ...animationProps }),
      })

      const loopWidth =
        track.children[logos.length].getBoundingClientRect().left -
        track.children[0].getBoundingClientRect().left

      gsap.to(track, {
        x: -loopWidth,
        duration: 18,
        ease: "none",
        repeat: -1,
      })
    }, section)

    const pause  = () => gsap.getTweensOf(track).forEach(t => t.pause())
    const resume = () => gsap.getTweensOf(track).forEach(t => t.resume())
    track.addEventListener("mouseenter", pause)
    track.addEventListener("mouseleave", resume)

    return () => {
      ctx.revert()
      track.removeEventListener("mouseenter", pause)
      track.removeEventListener("mouseleave", resume)
    }
  })
</script>

<section
  bind:this={section}
  id="skills"
  class="px-10 py-20"
  style="border-bottom: 3px double var(--ink); background-color: var(--paper);"
>


  <!-- Section header gaya koran -->
  <div class="text-center mb-2">
    <p class="font-serif text-[0.6rem] uppercase tracking-[0.3em] text-(--ink-muted)">
      — Arsenal —
    </p>
    <h2 class="reveal-skills font-serif text-5xl font-black text-(--ink)">
      Tech Skills
    </h2>
    <p class="font-serif text-xs italic text-(--ink-muted) mt-1">
      By Our Technology Correspondent
    </p>
    <div class="reveal-skills flex items-center gap-3 mt-3">
      <div class="flex-1 h-0.75 bg-(--ink)" />
      <span class="text-(--ink-muted) text-sm">✦</span>
      <div class="flex-1 h-0.75 bg-(--ink)" />
    </div>
  </div>

  <!-- Garis tipis tambahan khas masthead koran -->
  <div class="h-px bg-(--ink) opacity-40 mb-12 mt-1" />

  <!-- Kontainer utama untuk carousel dan artikel -->
  <div class="max-w-5xl mx-auto flex flex-col items-center gap-12">

    <!-- Kotak carousel, sekarang terpusat -->
    <div
      class="reveal-skills w-full max-w-3xl p-0.75"
      style="border: 3px solid var(--ink); outline: 1px solid var(--ink); outline-offset: 3px;"
    >
      <!-- Label pojok kiri atas gaya koran -->
      <div class="border-b border-(--ink) px-3 py-1 mb-3"
           style="background-color: var(--ink);">
        <p class="font-serif text-[0.6rem] uppercase tracking-[0.25em] text-(--paper)">
          Tools of the Trade
        </p>
      </div>

      <!-- Track carousel -->
      <div class="px-3 pb-8 overflow-x-hidden overflow-y-visible">
        <div bind:this={track} class="flex gap-8 w-max items-center">
          {#each items as logo, i (i)}
            <div class="group relative flex flex-col items-center gap-2 shrink-0">

              <!-- Logo dengan border tipis gaya koran -->
              <div
                class="w-16 h-16 flex items-center justify-center p-2
                       transition-all duration-200 group-hover:scale-110"
                style="border: 1px solid var(--ink); background-color: var(--paper);"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  class="w-12 h-12 object-contain
                         grayscale contrast-[1.3] brightness-[0.8]
                         transition-all duration-300
                         group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
                />
              </div>

              <!-- Badge nama muncul saat hover -->
              <div class="absolute -bottom-7 left-1/2 -translate-x-1/2
                          opacity-0 group-hover:opacity-100
                          transition-opacity duration-200 pointer-events-none">
                <Badge
                  variant="outline"
                  class="text-xs font-serif whitespace-nowrap
                         border-(--ink) text-(--ink) bg-(--paper)"
                >
                  {logo.name}
                </Badge>
              </div>

            </div>
          {/each}
        </div>
      </div>

      <!-- Footer kecil dalam box, khas caption koran -->
      <p class="font-serif text-[0.55rem] italic text-center text-(--ink-muted) pb-2 px-3">
        Fig. 3 — Hover to reveal each instrument's name.
      </p>
    </div>

    <!-- Artikel di bawah carousel, dengan layout multi-kolom yang responsif -->
    <div class="w-full flex flex-col">
      <div class="reveal-skills mb-8 text-center">
        <h3 class="font-serif text-2xl font-bold text-(--ink)">A Developer's Toolkit</h3>
        <p class="font-serif text-sm italic text-(--ink-muted)">Exploring the tools that power my projects.</p>
        <div class="h-px bg-(--ink) opacity-50 mt-2" />
      </div>

      <article
        class="reveal-skills font-serif text-sm leading-relaxed text-(--ink) text-justify 
               md:columns-2 lg:columns-3 md:gap-x-8 md:[column-rule:1px_solid_var(--ink)]"
      >
        <p class="first-letter:text-7xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1">
          Technology has become one of the most exciting ways for me to explore ideas and solve problems. Through web development, programming, and emerging technologies, I enjoy transforming curiosity into practical solutions. Every tool I learn expands my perspective and helps me better understand how technology can create meaningful experiences for people.
        </p>

        <p class="mt-3">
          The tools shown here represent my current journey, and I look forward to expanding this collection as I take on new challenges and opportunities.
        </p>
      </article>

      <!-- Ornamen penutup -->
      <div class="reveal-skills flex items-center gap-2 mt-8">
        <div class="flex-1 h-px bg-(--ink)" />
        <span class="text-xs text-(--ink-muted)">✦</span>
        <div class="flex-1 h-px bg-(--ink)" />
      </div>
      <p class="reveal-skills font-serif text-xs italic text-center text-[var(--ink-muted)]">
        — More tools may be added as the correspondent evolves —
      </p>
    </div>

  </div>

</section>