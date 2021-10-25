<script>
    import {activityData, fetchActivityData} from "../../stores/UrlStore";


    import {onMount} from 'svelte';
    import SwiperCore, {Navigation, Pagination} from 'swiper';
    import cheerio from 'cheerio';
    import "swiper/css/pagination"
    import "swiper/css/navigation"

    SwiperCore.use([Pagination,Navigation]);SwiperCore.use([Pagination,Navigation]);




    // tell swiper to use navigation and pagination modules
    SwiperCore.use([Navigation, Pagination]);




    let Swiper;
    let SwiperSlide;

    onMount(async () => {
        // dynamically import swiper module
        const SwiperSvelteModule = await import('swiper/svelte');
        Swiper = SwiperSvelteModule.Swiper;
        SwiperSlide = SwiperSvelteModule.SwiperSlide;
    });


    //Animation card



    const getData = async () => {
        await fetchActivityData()
            .then(() => {
                console.log($activityData);
            })
    }
    getData();


</script>


<div id="activity">
    <div class="activity__container">
        <div class="activity__title__container">
            <div class="section__title__wrapper">
                <h2 class="blue">Nos Activités</h2>

            </div>
            <div class="section__subtitle__wrapper">
                <p>
                    Be bold se concentre sur 4 domaines d’activité pour vous accompagner du mieux possible
                </p>
            </div>
        </div>

    </div>
    <svelte:component
            navigation={true}
            this={Swiper}
            breakpoints='{{
  "640": {
    "slidesPerView": 2,
    "spaceBetween": 30
  },
  "1370": {
    "slidesPerView": 3,
    "spaceBetween": 50
  },

   }}'
            spaceBetween={90}
            class="activity__card__container">

        {#each $activityData as activity }

            <svelte:component
                    this={SwiperSlide}
                    id="activity-card" class="activity_card" index={activity.id}>
            <div class="cards">
                <img src={activity.acf.thumbnail.url} alt="" class="icon-card">

                <h3 class="blue">

                    {cheerio.load(activity.title.rendered).text()}</h3>
                <div class="activity__card card__text__container">
                    <p>
                        {activity.acf.excerpt}
                    </p>

                </div>
                <div class="call__to__action">
                    <a class="orange" href="activity/{activity.slug}">Explorer ></a>
                </div>
            </div>
            </svelte:component>

        {/each}

    </svelte:component>


</div>


<style lang="scss">
  :global {
    @import 'swiper/swiper';
  }

  #activity {
    margin: 250px auto;
    width: 100vw;
    max-width: 1280px;

  }

  /*  #activity-card {
      width: 100%;
      max-width: 320px;
    }*/

  .swiper-wrapper {
    margin-top: 90px !important;
  }

  .section__subtitle__wrapper {
    width: 100%;
    max-width: 417px;


  }

  .activity__title__container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 812px;
    margin: 20px auto 20px;

    h2 {
      font-size: 40px;
    }
  }

  .activity__card__container {
    /*    display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        margin: auto;
        gap: 65px;*/
    margin-top: 60px !important;
  }

  .icon-card {
    width: 40px;
  }

  .card__text__container {
    width: 320px;

    p {
      font-weight: 300;
      font-size: 15px;
      color: #11222D;
      opacity: 0.8;

    }
  }

  @media only screen and(max-width: 786px) {
    .activity__title__container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
</style>