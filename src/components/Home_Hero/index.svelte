<script>
export const ssr = false
import {gsap} from "gsap/dist/gsap.js"
import {onMount} from "svelte";
import {scale} from "svelte/transition";
onMount(()=>{



    const words = document.querySelectorAll(".hero_animate")
    const background = document.querySelector('.hero__header__wrapper')
    console.log(words);
    gsap.from(words , { y:100 , duration:.5 , stagger:0.1 , delay:1})
    gsap.from(background , { transform: "scale(2)" , duration:1 , ease:"power2.out" , y:"100%" })
})

</script>


<header>

<div class="hero__header__wrapper">
    <div class="hero__header__container">

    </div>

    <div class="title__container">
        <h1>
            <div class="hidden-overflow">

                <span class={"orange hero_animate"}>
                    Be Bold
                </span>
            </div>
            <br/>
            <div class="hidden-overflow">

            <span class="hero_animate">
                    you are gold
                </span>
            </div>

        </h1>
    </div>


</div>
</header>



<style lang="scss">
  header {
    position: relative;
      width: 100vw;
      height: 100%;
    span {
      display: block;
    }

  }
    .hero__header__container {
      width: 100%;
      height: 100%;
      background: rgba(7, 15, 49, 0.57);
      position: absolute;
      z-index:1;

    }
  .hero__header__wrapper {
    background-image: url(https://b-gold.be/wp-content/uploads/2021/03/jump.png);
    background-position: center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    position: relative;
    h1 {
      line-height: 42px;
      position: relative;
      z-index: 2;
      color: white;
      font-weight: 800;
      font-family: Poppins , sans-serif;
      text-transform: uppercase;
      text-align: center;
      font-size: 60px;

    }
  }
</style>