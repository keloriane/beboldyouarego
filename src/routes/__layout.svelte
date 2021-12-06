<script lang="ts">
    import Header from '$lib/header/Header.svelte';
    import {activityData, fetchActivityData} from "../stores/UrlStore";
    import '../app.css';
    import axios from 'axios';
    import {onMount} from "svelte";
    import cheerio from 'cheerio';

    let orderedArray ;
    const getData = async () => {
        await fetchActivityData()
            .then(() => {
                orderedArray = $activityData.splice(0,3)

            })
    }
    getData();

</script>

<Header/>

<main>
    <slot/>
</main>

<footer>
    <div class="footer__container">
        <div class="footer__items page__item">
            <ul>
            <h4>pages</h4>

                <li><a href="/">Accueil</a></li>
                <li><a href="/about">à propos</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div class="footer__items activity__item">
            <ul>
            <h4>Activités</h4>


                {#each $activityData as activity }

                <li><a href="activity/{activity.slug}">
                            {cheerio.load(activity.title.rendered).text()}</a></li>
                    {/each }

            </ul>
        </div>
        <div class="footer__items contact__info__item ">
            <div class="info__container">
                <h4>Nos contact</h4>
                <div class="subtitle">
                    <p>Mobile</p>
                </div>
                <div class="info">
                    <a href="tel:+32479058383">
                        +32 479 05 83 83
                    </a>
                </div>
            </div>
            <div class="info__container">
                <div class="subtitle">
                    <p>mail</p>
                </div>
                <div class="info">

                    <a href="mailto:info@beboldyouaregold.be">
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

    background: #060E1A;

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
      display: flex;
      flex-wrap: wrap;
      gap: 125px;
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
