<svelte:head>
	<title>Contact Us</title>
</svelte:head>

<script>
	import { createEventDispatcher } from "svelte";


	const dispatch = createEventDispatcher()
	export let show = true
	const close = () => {
		show = false
		dispatch('close')
	}
</script>

{#if show}
<section on:click={close} class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50" >
	<div class="mx-auto mt-8 z-10  lg:h-[550px] lg:w-[900px]  rounded-xl bg-white " on:click|stopPropagation >
		<div class="lg:py-8 lg:px-16 flex flex-col ">
			<div class="flex flex-row justify-between font-Montserrat text-2xl font-bold text-[#000000B3] lg:mb-5">
				<div class="lg:w-[20%] ">LEAVE US A MESSAGE</div>
				<button class="text-5xl text-[#E3211A]" on:click={close}>X</button>
			</div>
			<div class="flex flex-row justify-between items-start ">
				<div>
					<img src="image 3.png" alt="green mountain" class="lg:w-[68%]" />
				</div>
				<div>
					<form action="">
						<div class="min-w-max  flex flex-col gap-4">
							<input
								class="placeholder:text-xs p-[6px] border border-gray-300 rounded-t-md"
								type="text"
								name="fullName"
								id="fullName"
								placeholder="Full Name"
							/>
							<input
								type="email"
								name="email"
								id="email"
								class="placeholder:text-xs p-[6px] border border-gray-300 rounded-t-md"
								placeholder="Email Address"
							/>
							<input
								type="number"
								name="phoneNumber"
								id="phoneNumber"
								class="placeholder:text-xs p-[6px] border border-gray-300 rounded-t-md"
								placeholder="Phone Number"
							/>
							<textarea
								name="message"
								id="message"
								cols="30"
								rows="5"
								class="placeholder:text-xs p-[6px] border border-gray-300 rounded-t-md"
								placeholder="Write Message . . ."
							/>
						</div>
						<div class=" flex flex-row my-4">
							<button
								type="submit"
								class="bg-[#E3211A] rounded-full flex shadow-md shadow-red-900 justify-center items-center font-semibold text-[11px] text-slate-100 h-[33px] w-[100px] "
							>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
{/if}

