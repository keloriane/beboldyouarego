<script>
	import Home_Hero from './../components/Home_Hero/index.svelte';
    import Home_About from './../components/Home_About/index.svelte';
    import Home_Mission from './../components/Home_Mission/index.svelte';
    import Home_Activity from './../components/Home_Activity/index.svelte';
    import Home_Boost from './../components/Home_Boost/Boost.svelte';
    import Home_Contact from './../components/Home_Contact/home_contact.svelte';
    import {fade} from "svelte/transition"





</script>


<div id="home_page" transition:fade>
<Home_Hero />
<Home_About />
<Home_Mission />
<Home_Activity />
<Home_Boost />
</div>



<style>

</style>