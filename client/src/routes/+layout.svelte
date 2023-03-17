<script>
	import '../app.css';
	import Footer from './Footer.svelte';
	import Nav from './Nav.svelte';
</script>

<div>
	<Nav/>
	<main class="flex flex-col min-h-screen">
		<slot />
	</main>
	<Footer/>

</div>
