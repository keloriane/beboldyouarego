<script>
    import axios from 'axios'

    let boostData =''

    axios.get('https://b-gold.be/wp-json/wp/v2/pages')
        .then((res)=> {
            boostData = res.data[0].acf;
            console.log(boostData);
        })



</script>

<section id="boost">
    <div class="layer__background__container">

    </div>
    <div class="section__mission__container">
        <div class="title__wrapper">
            <h2>{boostData?.title}</h2>
        </div>
        <div class="text__wrapper__mission">
            <div class="text__wrapper">
                <p>
                    {boostData?.boost_text}
                </p>
            </div>
            <div class="call__to__action">

            </div>
        </div>
    </div>

</section>

<style lang="scss">




  #boost {
    width: 100vw;
    position: relative;
    height: 455px;
    background-image: url("https://b-gold.be/wp-content/uploads/2021/09/boost.png");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;


  }

  .layer__background__container {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(355.75deg, #060D19 12.19%, rgba(6, 13, 25, 0.991353) 17.47%, rgba(6, 13, 25, 0.96449) 22.74%, rgba(6, 13, 25, 0.91834) 28.02%, rgba(6, 13, 25, 0.852589) 33.29%, rgba(6, 13, 25, 0.768225) 38.56%, rgba(6, 13, 25, 0.668116) 43.84%, rgba(6, 13, 25, 0.557309) 49.11%, rgba(6, 13, 25, 0.442691) 54.39%, rgba(6, 13, 25, 0.331884) 59.66%, rgba(6, 13, 25, 0.231775) 64.93%, rgba(6, 13, 25, 0.147411) 70.21%, rgba(6, 13, 25, 0.0816599) 75.48%, rgba(6, 13, 25, 0.03551) 80.76%, rgba(6, 13, 25, 0.0086472) 86.03%, rgba(6, 13, 25, 0) 91.3%);
  }


  .section__mission__container {
    width: 100%;
    max-width: 1030px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
  }

  .title__wrapper {
    width: 302px;
    h2 {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 41.6667px;
      line-height: 110%;
      color: #FFFFFF;
    }
  }
  .text__wrapper__mission {
    .text__wrapper{
      width: 100%;
      max-width: 446px;
        p {
          font-style: normal;
          font-weight: 300;
          font-size: 16.6667px;
          line-height: 120%;
          color: #FFFFFF;

        }
    }
    .call__to__action {
      a {

      }
    }
  }
</style>