<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
	import axios from 'axios'
	import {onMount} from "svelte";
	import cheerio from "cheerio";
	import {activityData, fetchActivityData} from "../../stores/UrlStore"


	const getData = async () => {
		await fetchActivityData()
				.then(() => {

				})
	}
	getData();
	console.log($page);

</script>

<header>
	<div class="corner">
		<a href="/">
			<img src="/bebold-logo.png" alt="logo beboldyouaregold">
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Accueil</a></li>
			<li  class="dropbtn"><a sveltekit:prefetch href="/about">
				<div class="dropdown">
					<div class="dropbtn">
						Services

					</div>
					<div class="dropdown-content">
						{#each $activityData as activity }
						<a href="/activity/{activity.slug}">{cheerio.load(activity.title.rendered).text()}</a>
							{/each}
					</div>


				</div>

				</a></li>
			<li class:active={$page.path === '/contact'}><a sveltekit:prefetch href="/about">A propos</a></li>
			<li class:active={$page.path === '/contact'}><a sveltekit:prefetch href="/contact">Contact</a></li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
	/* Dropdown Button */
	.dropbtn {

		color: black;
		border: none;
	}

	/* The container <div> - needed to position the dropdown content */
	.dropdown {
		position: relative;
		display: inline-block;
	}

	/* Dropdown Content (Hidden by Default) */
	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #f1f1f1;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		z-index: 1;
	}

	/* Links inside the dropdown */
	.dropdown-content a {
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		z-index: 20;
	}


	/* Change color of dropdown links on hover */
	.dropdown-content a:hover {background-color: #ddd;}

	/* Show the dropdown menu on hover */
	.dropdown:hover .dropdown-content {display: block;}

	/* Change the background color of the dropdown button when the dropdown content is shown */
	.dropdown:hover .dropbtn {background-color: #E7650F;}
</style>
