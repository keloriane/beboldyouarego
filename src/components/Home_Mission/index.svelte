<script>
    import Button from "../common/Button.svelte";

</script>

<section class="mission__section">
    <div class="mission__title__container">
        <h3 class="blue">La mission de</h3>
        <h3 class="orange">de BeBold</h3>
    </div>
    <div class="mission__text__container">
        <p>
            Ce projet a pour vocation d’aider principalement les jeunes étudiant.e.s bientôt/fraichement diplômé.es
            ainsi que les jeunes professionnel(le)s. Cela va de soi, tout autre personne en recherche d’emploi et/ou
            envisageant un changement dans sa carrière reste bienvenue car, bien que vous ayiez plus d’ancienneté, un
            regard jeune &amp; neuf sur votre profil reste susceptible d’amener une plus-value, il est toujours possible
            de faire MIEUX.
        </p>
    </div>
    <Button url="/about" />

</section>


<style lang="scss">
.mission__section {
    text-align: center;
  margin-top: 80px;
    .mission__title__container{
      text-align: center;
      margin-bottom: 25px;
        h3{
            font-size: 40px;
            line-height: 44px;
        }
    }
  .mission__text__container{
    width: 100%;
    max-width: 680px;
    margin: auto;
    p {
      font-weight: 400;

    }
  }

}
</style>