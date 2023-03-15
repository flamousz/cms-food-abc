<script>
	import MessageModals from "../components/MessageModals.svelte";
    let showModal = false
    const handleClose = () => {
        showModal = false
    }

</script>

<MessageModals show={showModal} on:close={handleClose}/>


<nav class=" bg-white xl:px-16 xl:py-4  w-full top-0 left-0 border-b border-gray-200 ">
    <div class="flex justify-between items-center ">
        <a href="/" class="flex">
            <img src="navbar/Logo.png" alt="Champi Logo" class="w-40" />
        </a>
        <div class="flex text-[#1A83E3] text-lg  gap-5 ">
            <a href="/services">Service</a>
            <a href="/products">Products</a>
            <a href="/brands">Our Brands</a>
            <a href="/plantations">Plantation</a>
            <button on:click={() => {showModal=true}} >Contact Us</button>
        </div>
    </div>
</nav>