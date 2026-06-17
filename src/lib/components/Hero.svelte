<script lang="ts">
  import { onMount } from "svelte"
  import gsap from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"
  import deddyImg from '$lib/assets/Deddy.jpeg';

  let heroText: HTMLDivElement
  let section: HTMLElement

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger)

    let ctx = gsap.context(() => {
      gsap.from(heroText.children, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      })
    }, section)

    return () => ctx.revert()
  })
</script>

<section bind:this={section} class="grid grid-cols-[1fr_1.5fr] h-[calc(100vh-73px)] items-center overflow-hidden px-12 gap-16">

  <!-- Foto -->
  <div class="flex justify-center items-center">
    <div class="w-[80%] aspect-4/5 p-2 border border-foreground/20">
      <img
  src={deddyImg}
  alt="Deddy Sentiana"
  class="w-full h-full object-cover object-top grayscale"
/>
    </div>
  </div>

  <div bind:this={heroText} class="flex flex-col justify-center">
    <span class="font-serif text-lg uppercase tracking-widest text-neutral-500 mb-4">
      Portfolio
    </span>
    <span class="font-serif text-7xl font-bold leading-none text-foreground">
      Deddy Sentiana
    </span>
    <hr class="my-6 border-foreground/30" />
    <span class="font-serif text-xl text-neutral-600 max-w-md">
      A showcase of projects and skills in modern web development, with a passion for creative
      coding and elegant user experiences.
    </span>
  </div>

</section>