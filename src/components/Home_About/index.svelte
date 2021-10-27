<script>
    export const ssr = false
    import {aboutData} from './../../stores/UrlStore.js'
    import Button from "../common/Button.svelte";

</script>


<section class="home_about">
    <div class="text__container">
        <div class="text__container title__container">
            <h3 class="text__container section_title blue">
                <div class="hidden-overflow">
                <span class="title-animate">
                    Soyez
                </span>

                </div>
                <div class="hidden-overflow">
                <span class="title-animate">
                    Audacieux
                </span>

                </div>
            </h3>
        </div>
        <div class="text__container text__wrapper">
            <p class="section__text">
                {  $aboutData?.a_propos}
            </p>

        </div>
        <Button url="/about"/>
    </div>
    <div class="image__container">
        <div class="image__wrapper">
            <div class="overflow-image">

            </div>
            <img src={$aboutData?.image_about?.url} alt="bebold girl smile" class="main__image">
        </div>
    </div>

</section>


<style lang="scss">

  .home_about {
    display: flex;
    width: 100%;
    max-width: 1280px;
    align-items: center;
    justify-content: center;
    margin: 250px auto;

    gap: 95px;

    span {
      display: block;
    }

    .image__container {
      position: relative;
      overflow: hidden;



      img {
        max-width: 525px;
      }
    }

    .text__container {
      width: 100%;
      max-width: 380px;

      .text__wrapper {
        max-width: 319px;
        margin-top: 50px;
      }

      h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 110%;
        align-items: center;
        letter-spacing: -0.01em;
        display: flex;
        gap: 10px;
      }

      .call__to__action {
        margin-top: 47px;

        button {
          border: none;
          width: 188px;
          height: 48px;
          border-radius: 30px;
          background: #E7650F;

          a {
            color: white;
            text-decoration: none;
            font-weight: 800;
            font-size: 14px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 857px) {
    .home_about {
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .text__container {
        max-width: 470px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .call__to__action {
          margin-top: 15px;
        }

        button {
          margin: 0 auto;
        }
      }
    }
  }
</style>