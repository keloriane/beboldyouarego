<script lang="ts">
    import Header from '$lib/header/Header.svelte';
    import '../app.css';
</script>

<Header/>

<main>
    <slot/>
</main>

<footer>
    <div class="footer__container">
        <div class="footer__items page__item">
            <h4>pages</h4>
            <ul>
                <li><a href="">Accueil</a></li>
                <li><a href="">à propos</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        <div class="footer__items activity__item">
            <h4>Activités</h4>
            <ul>
                <li><a href="">Cv et Lettre de motivation</a></li>
                <li><a href="">Aide à la recherche d'emplois</a></li>
                <li><a href="">Linkedin</a></li>
                <li><a href="">Entretien d'embauche</a></li>
            </ul>
        </div>
        <div class="footer__items contact__info__item ">
            <div class="info__container">
                <h4>Nos contact</h4>
                <div class="subtitle">
                    <p>Mobile</p>
                </div>
                <div class="info">
                    <a href="">
                        +32 479 05 83 83
                    </a>
                </div>
            </div>
            <div class="info__container">
                <div class="subtitle">
                    <p>mail</p>
                </div>
                <div class="info">

                    <a href="">
                        info@beboldyouaregold.be
                    </a>

                </div>
            </div>
        </div>
    </div>
</footer>

<style lang="scss">
  footer {
    position: absolute;
    width: 100vw;
    bottom: -259px;
    background: #060E1A;
    height: 259px;
    padding: 50px;

    .info {
      a {
        font-style: normal;
        font-weight: 600;
        font-size: 16.6667px;
        line-height: 125.5%;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        flex-wrap: wrap;
        color: #FFFFFF;

      }
    }

    .subtitle {
      a {
        font-style: normal;
        font-weight: 300;
        font-size: 12.5px;
        line-height: 125.5%;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.5);
      }
    }

    h4 {
      font-family: Poppins, sans-serif;
    }

    .footer__container {
      display: grid;
      grid-template-columns: 1fr 1fr 2fr;
      gap: 30px;
      width: 100%;
      max-width: 1030px;
      margin: auto;

      .footer__items {
        color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;


        ul {
          list-style: none;

          li {
            a {
              text-decoration: none;
              color: white;
            }
          }
        }
      }
    }

    .info__container {
      h4 {
        margin-bottom: 15px;
      }
    }
  }
</style>
