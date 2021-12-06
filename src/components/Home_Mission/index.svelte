<script>
    import {aboutData} from "../../stores/UrlStore";

    export const ssr = false
    import Button from "../common/Button.svelte";
    import {gsap} from 'gsap/dist/gsap.js';
    import {ScrollTrigger} from 'gsap/dist/ScrollTrigger.js'
    import axios from 'axios';
    import {onMount} from "svelte";

    gsap.registerPlugin(ScrollTrigger)

    let missionData =''

    axios.get('https://b-gold.be/wp-json/wp/v2/pages')
        .then((res)=> {
            missionData = res.data[0].acf;
            console.log("missionData" , missionData);

        })




</script>

<section class="mission__section">
    <div class="mission__title__container">
        <div class="hidden-overflow">
            <h3 class=" title_mission blue">{missionData.mission_title_up}</h3>

        </div>
        <div class="hidden-overflow">
            <h3 class="  title_mission orange">{missionData.mission_title_down}</h3>

        </div>

    </div>
    <div class="mission__text__container">
        <p class="mission__text">
            Ce projet a pour vocation d’aider principalement les jeunes étudiant.e.s bientôt/fraichement diplômé.es
            ainsi que les jeunes professionnel(le)s. Cela va de soi, tout autre personne en recherche d’emploi et/ou
            envisageant un changement dans sa carrière reste bienvenue car, bien que vous ayiez plus d’ancienneté, un
            regard jeune &amp; neuf sur votre profil reste susceptible d’amener une plus-value, il est toujours possible
            de faire MIEUX.
        </p>
    </div>


</section>


<style lang="scss">
  .mission__section {
    text-align: center;
    margin-top: 80px;
    .mission__text {
      opacity: 0.8;
      color: #11222D;
      font-weight: 300;
    }

    .mission__title__container {
      text-align: center;
      margin-bottom: 25px;

      h3 {
        font-size: 40px;
        line-height: 44px;
      }
    }

    .mission__text__container {
      width: 100%;
      max-width: 680px;
      margin: auto;

    }

  }
</style>