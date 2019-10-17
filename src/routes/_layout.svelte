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

  @media (max-width: 600px) {
    :global(ul) {
      padding: 0;
    }
  }

  main {
    min-width: 100vw;
    min-height: 100vh;
    background: #eeddcc;
    background-repeat: no-repeat;
    background-image: url("/images/background.min.png");
  }

  @media (max-width: 800px) {
    main {
      background-size: 90%;
      background-position: -20% 20%;
    }
  }
</style>

<main>
  <slot />
</main>
