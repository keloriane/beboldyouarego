<script>
    import Home_About from './../Home_About/index.svelte'
    import Button from "./../common/Button.svelte";
    import {aboutData} from "../../stores/UrlStore";

    console.log($aboutData);
</script>

<section id="boost">
    <div class="text__container">
        <div class="text__container title__container">
            <h3 class="text__container section_title blue">Boostez votre employabilité</h3>
        </div>
        <div class="text__container text__wrapper">
            <p class="section__text">
                {
                        $aboutData?.mission_text
                }
            </p>

        </div>
        <Button url="/todos" />
    </div>
    <div class="boost__image__container">
        <div class="image__container image__wrapper">
            <img src={$aboutData?.imageone?.url} alt="">
        </div>
        <div class="image__layer">
            <img src={$aboutData?.imgaetwo?.url} alt="">
        </div>
    </div>

</section>

<style lang="scss">

  .boost__image__container {
    position: relative;
    .image__wrapper {
        img {
          width: 545px;
        }
    }
    .image__layer {
      position: absolute;
      bottom: -50px;
      img {
        width: 253px;

      }
    }
  }

    #boost {

        display: flex;
        width: 100%;
        max-width: 1280px;
        align-items: center;
        gap: 95px;
      justify-content: center;
      margin: 100px auto;
    .image__container {
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
    }
    .call__to__action {
        margin-top: 47px;
    button {
        border: none;
        width: 188px;
        height: 48px;
        border-radius: 30px;
        background: #E7650F;
    a{
        color: white;
        text-decoration: none;
        font-weight: 800;
        font-size: 14px;
    }
    }
    }
    }
    }
    @media only screen and (max-width:857px){
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