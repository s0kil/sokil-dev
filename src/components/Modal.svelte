<script>
  import { slide } from "svelte/transition";
  import { quintInOut } from "svelte/easing";

  export let route;

  function handleKeydown(event) {
    if (event.keyCode === 27) closeModal();
  }

  function closeModal() {
    route = "";
  }
</script>

<style>
  section {
    position: absolute;
    top: 0;

    width: 100vw;
    height: 100vh;
    background: #c9b59a;
  }

  nav {
    display: flex;
    width: 100%;
  }

  span {
    font-family: "Philosopher", sans-serif;
    font-weight: 700;
    font-size: 2rem;
    padding: 1.2rem;
    margin-left: auto;
    user-select: none;
  }
  span:hover {
    cursor: pointer;
    color: #bb0a1e;
  }

  div {
    padding: 1rem 2rem;
  }
</style>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Allerta|Nobile&display=swap"
    rel="stylesheet" />
</svelte:head>

<section transition:slide={{ duration: 500, easing: quintInOut }}>
  <nav>
    <slot name="header" />
    <span on:click={closeModal}>X</span>
  </nav>

  <div>
    <slot />
  </div>
</section>
