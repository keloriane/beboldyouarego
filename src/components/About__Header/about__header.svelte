<script>
    export let aboutUp;
    export let aboutDown;
    export let aboutText;
    export let aboutImage;
    export let aboutImageLayer;

</script>


<section class="about__intro">
    <div class="about__info__container">
        <div class="title__about title__wrapper">
            <h2 class="blue">{aboutUp}</h2>
            <h2 class="orange">{aboutDown}</h2>
        </div>
        <div class="text__about text__wrapper">
            <p>
                {aboutText}
            </p>
        </div>
    </div>
    <div class="about__img__container">
        <div class="image__wrapper">
            <img src={aboutImage} alt="">
        </div>

    </div>
</section>


<style lang="scss">

  @media  screen and ( max-width:890px )  {
    .about__intro {
      flex-direction: column;
      gap: 50px !important;
      .about__info__container {
        width: 100%;
        max-width: 780px !important;
      }
      .image__layer {
        display: none;
      }
    }
  }
  .about__intro {
    width: 100%;
    max-width: 1280px;
    margin: auto;
    padding: 20px;
    display: flex;
      gap: 190px;
    align-items: center;
    .about__info__container {
      width: 100%;
      max-width: 445px;

    }

    .about__img__container{
      position: relative;
      .image__layer {
        position: absolute;
        left: -25%;
        bottom: -29%;

        img {
          width: 100%;
          max-width: 283px;
        }
      }
    }
    h2 {

      line-height: 45px;
      font-weight: 800;
      margin-bottom: 15px;
    }
  }

</style>