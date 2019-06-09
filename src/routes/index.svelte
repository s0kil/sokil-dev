<script>
  import Modal from "../components/Modal.svelte";

  import About from "../components/About.svelte";
  import Skills from "../components/Skills.svelte";
  import Portfolio from "../components/Portfolio.svelte";

  let route;
</script>

<style>
  h1,
  h2,
  button {
    font-family: "Philosopher", sans-serif;
    font-weight: 400;
  }

  h1 {
    font-size: 2rem;
    margin: 0;

    color: #5e5245;
    text-align: left;
    padding: 1rem;
  }

  h1 span {
    font-weight: 700;
  }

  h2 {
    margin: 0;
    padding: 1rem;
    color: #435456;
    font-size: 2rem;
  }

  nav {
    position: fixed;
    bottom: 1.4rem;
    left: 1.4rem;
  }

  button {
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem;
    border: 0;
    background: #ccaa55;
  }
  button:hover {
    cursor: pointer;
    background: #5e5245;
    color: #b89239;
  }
  button + button {
    margin-left: 0.2rem;
  }
</style>

<h1>
  Sokil's
  <span>Proficiencies</span>
</h1>

<nav>
  <button
    on:click={() => {
      route = 'portfolio';
    }}>
    portfolio
  </button>
  <button
    on:click={() => {
      route = 'skills';
    }}>
    skills
  </button>
  <button
    on:click={() => {
      route = 'about';
    }}>
    about
  </button>
</nav>

{#if route === 'portfolio'}
  <Modal bind:route>
    <h2 slot="header">Portfolio</h2>
    <Portfolio />
  </Modal>
{:else if route === 'skills'}
  <Modal bind:route>
    <h2 slot="header">Skills</h2>
    <Skills />
  </Modal>
{:else if route === 'about'}
  <Modal bind:route>
    <h2 slot="header">About</h2>
    <About />
  </Modal>
{/if}
