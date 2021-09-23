<script>
    export const ssr = false
    import Button from "../common/Button.svelte";
    import {gsap} from 'gsap/dist/gsap.js';
    import {ScrollTrigger} from 'gsap/dist/ScrollTrigger.js'
    import {onMount} from "svelte";

    gsap.registerPlugin(ScrollTrigger)

    onMount(() => {
        const words = document.querySelectorAll('.title_mission ');
        const homeAboutTimeline = gsap.timeline({
            scrollTrigger: {
                start: "center center",
                trigger: ".mission__section"
            }
        })
        homeAboutTimeline
            .from(words, {y: 100, duration: .5, stagger: 0.1})
            .fromTo('.mission__text', {y: 100, opacity: 0, duration: .5, delay: -.8}, {y: 0, opacity: 1})
    })

</script>

<section class="mission__section">
    <div class="mission__title__container">
        <div class="hidden-overflow">
            <h3 class=" title_mission blue">La mission de</h3>

        </div>
        <div class="hidden-overflow">
            <h3 class="  title_mission orange">de BeBold</h3>

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
    <Button url="/about"/>

</section>


<style lang="scss">
  .mission__section {
    text-align: center;
    margin-top: 80px;

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

      p {
        font-weight: 400;

      }
    }

  }
</style>