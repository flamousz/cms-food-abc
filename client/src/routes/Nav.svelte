<script>
	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<nav
	class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center border-b border-gray-200"
>
	<div class="flex items-center justify-between">
		<a href="/" class="flex">
			<img src="navbar/Logo.png" alt="Champi Logo" class="w-40 hover:scale-110 hover:transition" />
		</a>
		<div on:click={toggleNavbar} class="flex md:hidden">
			<button
				type="button"
				class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
	</div>

	<div
		class="text-[#1A83E3]  flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
			? 'flex'
			: 'hidden'}"
	>
		<a class="hover:text-[#265785]" href="/services">Service</a>
		<a class="hover:text-[#265785]" href="/products">Products</a>
		<a class="hover:text-[#265785]" href="/brands">Our Brands</a>
		<a class="hover:text-[#265785]" href="/plantations">Plantation</a>
		<a class="hover:text-[#265785]" href="/abouts">About Us</a>
	</div>
</nav>
