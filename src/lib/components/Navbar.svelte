<script lang="ts">
  import { onMount } from "svelte"

  let scrolled = false

  onMount(() => {
    const handleScroll = () => { scrolled = window.scrollY > 10 }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap");

  .fraktur {
    font-family: "UnifrakturMaguntia", cursive;
  }
</style>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  class:shadow-md={scrolled}
  style="background-color: {scrolled ? 'white' : 'transparent'};"
>
  <!-- Garis atas tebal -->
  <div class="h-0.75 bg-(--ink)" />
  <div class="h-px bg-(--ink) mt-0.75" />

  <!-- Judul surat kabar di tengah -->
  <div class="text-center py-2 border-b border-(--ink)">
    <p class="font-serif text-[0.65rem] tracking-[0.3em] uppercase text-(--ink-muted)">
      Est. 2025 — Personal Chronicle — Vol. I
    </p>
    <h1
      class="fraktur text-5xl font-black tracking-tight text-(--ink) leading-none py-1"
    >
      Deddy Sentiana
    </h1>
    <p class="font-serif text-[0.65rem] tracking-[0.3em] uppercase text-(--ink-muted)">
      "Code, Create, Conquer"
    </p>
  </div>

  <!-- Nav links -->
  <nav class="flex justify-center gap-10 py-2 border-b-2 border-(--ink)">
    <a href="#about"    class="font-serif text-sm uppercase tracking-widest text-(--ink) hover:underline">About</a>
    <span class="text-(--ink-muted)">✦</span>
    <a href="#skills"   class="font-serif text-sm uppercase tracking-widest text-(--ink) hover:underline">Tech Skills</a>
    <span class="text-(--ink-muted)">✦</span>
    <a href="#projects" class="font-serif text-sm uppercase tracking-widest text-(--ink) hover:underline">Projects</a>
  </nav>
</header>

<!-- Spacer sesuai tinggi header -->
<div class="h-32.5" />