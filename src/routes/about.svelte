<script>
    import {browser, dev} from '$app/env';
    import About_Header from './../components/About__Header/about__header.svelte'
    import About_How from './../components/About_How/about_how.svelte';
    import cheerio from 'cheerio'
    import About_Team from "./../components/About_Team/about_team.svelte";
    import Home_Contact from './../components/Home_Contact/home_contact.svelte';
    import About_Who from './../components/About_Who/index.svelte'
    import {fade} from "svelte/transition"



    const fetchData = (async () => {

        const res = await fetch('https://b-gold.be/wp-json/wp/v2/pages/28933')
        const data = await res.json();



        if (res.ok) {
            return data
        } else {
            throw new Error(data)
        }
    })


    export const hydrate = dev;

    // ...but if the client-side router is already loaded
    // (i.e. we came here from elsewhere in the app), use it
    export const router = browser;

    // since there's no dynamic data here, we can prerender
    // it so that it gets served as a static asset in prod
    export const prerender = true;


</script>

<svelte:head>
    <title>About</title>
</svelte:head>

<div class="about_content" transition:fade>

    {#await fetchData()  }
        <p>...waiting</p>
    {:then data}

        <About_Header
                aboutUp={data?.acf.title_about_up}
                aboutDown={data.acf.title_about_down}
                aboutText={cheerio.load(data.acf.about_text).text()}
                aboutImage={data.acf.about_image.url}
                aboutImageLayer={data.acf.about_image_layer.url}/>
        <About_Who />

        <About_Team />
    <About_How />
        <Home_Contact />

    {/await}


</div>

<style>
    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }
</style>
