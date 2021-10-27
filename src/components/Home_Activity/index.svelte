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
    <div class="swiper_controller">
        <div class="arrow_next arrow">
            <svg width="50" height="50" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="37.5" stroke="#E7650F" stroke-width="5"/>
                <path d="M32.7344 24.9219L49.1413 39.3986C49.5956 39.7994 49.592 40.5089 49.1336 40.905L32.7344 55.0781" stroke="#E7650F" stroke-width="5"/>
            </svg>

        </div>
        <div class="arrow_prev arrow">
            <svg width="50" height="50" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="37.5" transform="rotate(-180 40 40)" stroke="#E7650F" stroke-width="5"/>
                <path d="M47.2656 55.0781L30.8587 40.6014C30.4044 40.2006 30.408 39.4911 30.8664 39.095L47.2656 24.9219" stroke="#E7650F" stroke-width="5"/>
            </svg>

        </div>
    </div>
    <svelte:component
            navigation={{
            nextEl: '.arrow_next',
            prevEl: '.arrow_prev'}
            }
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
                <img src={activity.acf.thumbnail.url} alt={`${cheerio.load(activity.title.rendered).text()}-image`} class="icon-card">

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
  .swiper_controller {
    width: 68vw;
    /* position: absolute; */
    /* z-index: 1000000; */
    /* margin: auto; */
    background-color: transparent;
    display: flex;
    flex-flow: row-reverse;
    justify-content: space-between;
    margin: auto;
  }

  #activity {
    margin: 250px auto;
    position: relative;
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