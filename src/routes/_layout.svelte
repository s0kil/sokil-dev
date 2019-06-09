<style>
  :global(html, body) {
    width: 100%;
    height: 100%;
  }

  :global(body) {
    font-size: 14px;
  }

  @media (min-width: 400px) {
    :gloabl(body) {
      font-size: 16px;
    }
  }

  main {
    min-width: 100vw;
    min-height: 100vh;
    background: #eeddcc;
    background-size: 90%;
    background-position: -20% 20%;
    background-repeat: no-repeat;
    background-image: url("/images/background.min.png");
  }
</style>

<main>
  <slot />
</main>
