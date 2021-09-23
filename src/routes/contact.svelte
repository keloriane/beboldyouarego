<script>
    import {browser, dev} from '$app/env';

    export const hydrate = dev;

    // ...but if the client-side router is already loaded
    // (i.e. we came here from elsewhere in the app), use it
    export const router = browser;

    // since there's no dynamic data here, we can prerender
    // it so that it gets served as a static asset in prod
    export const prerender = true;

</script>

<svelte:head>
    <title>Contact</title>
</svelte:head>
<section id="contact__page">
    <div class="contact-page__container">
        <div class="image__contact__wrapper">
            <div class="layer">


            </div>
            <div class="image__background__contact">
            </div>
        </div>
        <div class="form__container">
            <div class="form__description">
                <h2>Contactez nous</h2>
                <p>Contactez nous pour toutes autres informations supplémentaires, ou pour votre
                    pour un premier entretien gratuit</p>
            </div>
            <form action="">
                <label for="name">nom</label>
                <input id="name" type="text" aria-label="name">
                <label for="last-name">prénom</label>
                <input id="last-name" type="text" aria-label="name">
                <label for="mail">email</label>
                <input id="mail" type="email" aria-label="name">
                <label for="description">Description</label>
                <textarea name="description" id="description" cols="30" rows="10"></textarea>
            </form>
        </div>
    </div>
</section>

<style lang="scss">
  #contact__page {
    width: 100vw;
    height: 100vh;
  }

  .contact-page__container {
    width: 100%;
    height: 100%;
    background-color: lightblue;
    display: flex;
  }

  .image__contact__wrapper {
    position: relative;
    width: 50%;
    height: 100%;

  }

  .image__background__contact {
    background-image: url("https://b-gold.be/wp-content/uploads/2021/09/image-4.png");
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .layer {
    background: rgba(58, 116, 152, 0.75);
    mix-blend-mode: multiply;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    top: 0;
    left: 0;

    .logo {
      position: relative;
      z-index: 4;
    }


  }

  .form__container {
    background-color: #0C1B33;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    color: white;
    padding: 40px;
    input , textarea {
     color: white;
      font-family: Poppins , sans-serif;
    }

    .form__description {
      width: 100%;
      padding: 10px;
      max-width: 391px;
    }

    p {
      font-family: Poppins;
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 123%;
      display: flex;
      align-items: center;
      letter-spacing: -0.01em;
      color: rgba(255, 255, 255, 0.7);
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 40px;
      color: white;

      input, textarea {
        background: none;
        border-bottom: 1px solid white;
        border-top: none;
        border-right: none;
        border-left: none;
        gap: 30px;
      }


    }
  }
</style>