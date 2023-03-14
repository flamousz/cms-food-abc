<script>
	import '../app.css';
	import Footer from './Footer.svelte';
	import Nav from './Nav.svelte';
</script>

<div class="flex flex-col min-h-screen">

	<Nav/>
	<main>
		<slot />
	</main>
	<!-- <Footer/> -->

</div>
