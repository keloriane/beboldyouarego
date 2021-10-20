<script>
    import Button from "../common/Button.svelte";

</script>


<section id="home_contact">
    <div class="home__contact__container">
        <div class="title__home__contact">
            <div class="subtitle__wrapper">
                <h3>
                    Contact
                </h3>
            </div>
            <div class="title__wrapper">
                <a href="/contact">
                    Contactez nous
                    pour un premier entretien gratuit
                </a>
            </div>
        </div>
    </div>
    <div class="boost__line"></div>
</section>


<style lang="scss">
  .boost__line {
    width: 1026px;
    border: .5px solid #F4B083;
    height: 1px;
    margin: 20px auto 20px auto;

  }
  #home_contact {
    background: #060E1A;
  }

  .home__contact__container {
    width: 100%;
    max-width: 970px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 77px;
    padding-bottom: 77px;
  }

  .text__home__contact {
    width: 100%;
    max-width: 402px;

    .text__wrapper {
      p {
        font-style: normal;
        font-weight: 300;
        font-size: 16.6667px;
        line-height: 130%;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        opacity: 0.8;
      }
    }
  }

  .title__home__contact {

    width: 100%;
    max-width: 355px;

    .subtitle__wrapper {
      h3 {
        font-style: normal;
        font-weight: 300;
        font-size: 12.5px;
        line-height: 125.5%;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        color: #FFFFFF;
      }
    }

    .title__wrapper {
      a {
        font-style: normal;
        font-weight: bold;
        font-size: 41.6667px;
        line-height: 110%;
        display: flex;
        align-items: center;
        text-decoration-line: underline;
        color: #FFFFFF;
      }
    }
  }

  @media only screen and (max-width: 990px) {
    .home__contact__container {
      justify-content: center;
      align-items: center;
      gap: 30px;
      .text__home__contact {
        width: 355px;
        .call__to__action {
          text-align: center;
        }
      }
    }
  }
</style>