import { c as create_ssr_component, b as createEventDispatcher, v as validate_component, e as escape } from "../../chunks/index.js";
import "@emailjs/browser";
const app = "";
const MessageModals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { show = true } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  return `${$$result.head += `<!-- HEAD_svelte-1k4xffk_START -->${$$result.title = `<title>Contact Us</title>`, ""}<!-- HEAD_svelte-1k4xffk_END -->`, ""}

${show ? `<section class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50"><div class="mx-auto mt-8 z-10 lg:h-[550px] lg:w-[900px] w-[400px] rounded-xl bg-white "><div class="lg:py-8 lg:px-16 flex flex-col "><div class="flex flex-row justify-between font-Montserrat p-3 lg:p-0 lg:text-2xl font-bold text-[#000000B3] lg:mb-5"><div class="lg:w-[20%] ">LEAVE US A MESSAGE</div>
					<button class="text-sm lg:text-5xl text-[#E3211A]">X</button></div>
				<div class="flex flex-row justify-between items-start px-3 lg:px-0 lg:gap-0 gap-4"><div><img src="image 3.png" alt="green mountain" class="lg:w-[68%] rounded-md object-cover h-[300px] lg:h-auto"></div>
					<div><form><div class="min-w-max flex flex-col gap-4"><input class="placeholder:text-xs p-[6px] border border-gray-300 rounded-t-md" type="text" name="fullName" id="fullName" placeholder="Full Name">
								<input type="email" name="email" id="email" class="placeholder:text-xs p-[6px] border border-gray-300 rounded-t-md" placeholder="Email Address">
								<input type="number" name="phoneNumber" id="phoneNumber" class="placeholder:text-xs p-[6px] border border-gray-300 rounded-t-md" placeholder="Phone Number">
								<textarea name="message" id="message" cols="30" rows="5" class="placeholder:text-xs p-[6px] border border-gray-300 rounded-t-md" placeholder="Write Message . . ."></textarea></div>
							<div class="flex flex-row my-4 justify-end"><button type="submit" class="bg-[#E3211A] rounded-full flex shadow-md shadow-red-900 justify-center items-center font-semibold text-[11px] text-slate-100 h-[33px] w-[100px] ">Send Message
								</button></div></form></div></div></div></div></section>` : ``}`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showModal = false;
  return `${validate_component(MessageModals, "MessageModals").$$render($$result, { show: showModal }, {}, {})}

<footer class="flex flex-col bg-[#E5E5E580] lg:mt-auto "><div class="flex flex-col lg:gap-0 gap-10 lg:flex-row p-8 lg:p-0 lg:justify-between lg:items-center lg:px-16 lg:py-8 font-bold text-[#000000B3]"><div class="lg:w-3/12 w-[50%]"><a href="/" class=""><img src="navbar/Logo.png" alt="Champi Logo" class="lg:w-40 lg:mb-5 "></a>
			<div class="pb-3 text-sm">There are many variations of passages of lorem ipsum available.
			</div>
			<div class="bg-white rounded-full lg:w-[88%] w-[60%] text-slate-400 lg:px-3 lg:py-2 font-light p-1 lg:p-0 text-center lg:text-left"><button>Send Message</button></div></div>
		<div class="flex flex-col lg:flex-row justify-end lg:gap-0 gap-10"><div class="lg:mr-8"><div class="text-lg ">Links</div>
				<div class="flex flex-col text-sm lg:gap-3 gap-1 pt-5"><a href="/">Our Project</a>
					<a href="/abouts">About Us</a>
					<a href="/">Our Service</a>
					<a href="/">Upcoming Events</a>
					<a href="/">Volunteer</a></div></div>
			<div class="lg:w-[32%]"><div class="text-lg">Contact</div>
				<div class="flex flex-col text-sm pt-5"><div class="flex flex-row mb-2"><div class="mr-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.63303C17.5714 4.79591 16.5819 4.13214 15.4919 3.68018C14.4019 3.22821 13.233 2.99703 12.053 3.00003C7.105 3.00003 3.077 7.02703 3.075 11.977C3.075 13.559 3.488 15.103 4.273 16.465L3 21.116L7.759 19.867C9.07539 20.5836 10.5502 20.9594 12.049 20.96H12.053C17 20.96 21.028 16.933 21.03 11.983C21.0334 10.8035 20.803 9.63502 20.3521 8.54509C19.9012 7.45516 19.2387 6.4654 18.403 5.63303ZM12.053 19.445H12.05C10.7135 19.4452 9.40163 19.0856 8.252 18.404L7.98 18.242L5.156 18.983L5.909 16.23L5.732 15.948C4.98479 14.7585 4.58923 13.3818 4.591 11.977C4.593 7.86303 7.94 4.51603 12.056 4.51603C13.0363 4.51385 14.0072 4.70611 14.9127 5.08168C15.8181 5.45725 16.6401 6.00867 17.331 6.70403C18.0256 7.39607 18.5762 8.21892 18.9509 9.12503C19.3256 10.0311 19.517 11.0025 19.514 11.983C19.512 16.097 16.165 19.445 12.053 19.445ZM16.146 13.856C15.921 13.743 14.819 13.201 14.613 13.126C14.408 13.051 14.259 13.014 14.109 13.238C13.959 13.462 13.529 13.967 13.398 14.117C13.267 14.267 13.136 14.285 12.912 14.173C12.688 14.061 11.965 13.824 11.108 13.06C10.441 12.465 9.991 11.731 9.86 11.506C9.729 11.281 9.846 11.16 9.959 11.048C10.06 10.948 10.183 10.786 10.295 10.655C10.407 10.524 10.444 10.431 10.519 10.281C10.594 10.131 10.557 10 10.5 9.88803C10.444 9.77503 9.995 8.67103 9.808 8.22203C9.627 7.78703 9.442 7.84503 9.304 7.83903C9.16108 7.83318 9.01804 7.83052 8.875 7.83103C8.76126 7.83393 8.64934 7.86029 8.54626 7.90848C8.44318 7.95666 8.35117 8.02562 8.276 8.11103C8.07 8.33603 7.491 8.87803 7.491 9.98203C7.491 11.086 8.295 12.153 8.407 12.303C8.519 12.453 9.989 14.718 12.239 15.69C12.775 15.921 13.193 16.059 13.518 16.163C14.055 16.334 14.544 16.309 14.931 16.252C15.362 16.188 16.258 15.71 16.445 15.186C16.632 14.662 16.632 14.213 16.576 14.119C16.52 14.025 16.369 13.968 16.146 13.856Z" fill="#FDCA00"></path></svg></div>
						<div>555 341 0032</div></div>
					<div class="flex flex-row py-2 border-y-black border-y-[1px]"><div class="mr-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5662 21.999H16.5942C17.1222 21.999 17.6212 21.791 17.9992 21.413L20.7112 18.701C20.8042 18.6082 20.8779 18.498 20.9282 18.3767C20.9785 18.2554 21.0044 18.1253 21.0044 17.994C21.0044 17.8627 20.9785 17.7326 20.9282 17.6113C20.8779 17.49 20.8042 17.3798 20.7112 17.287L16.7112 13.287C16.6184 13.1941 16.5082 13.1203 16.3869 13.07C16.2656 13.0197 16.1355 12.9938 16.0042 12.9938C15.8729 12.9938 15.7428 13.0197 15.6215 13.07C15.5002 13.1203 15.39 13.1941 15.2972 13.287L13.7032 14.881C12.9642 14.661 11.5852 14.161 10.7112 13.287C9.83722 12.413 9.33722 11.034 9.11722 10.295L10.7112 8.701C10.8042 8.60821 10.8779 8.49801 10.9282 8.37669C10.9785 8.25538 11.0044 8.12533 11.0044 7.994C11.0044 7.86267 10.9785 7.73262 10.9282 7.61131C10.8779 7.48999 10.8042 7.37979 10.7112 7.287L6.71122 3.287C6.52004 3.10655 6.2671 3.00603 6.00422 3.00603C5.74133 3.00603 5.48839 3.10655 5.29722 3.287L2.58622 5.999C2.20622 6.379 1.99222 6.901 2.00022 7.434C2.02322 8.858 2.40022 13.804 6.29822 17.702C10.1962 21.6 15.1422 21.976 16.5662 21.999ZM6.00522 5.408L8.59122 7.994L7.29822 9.287C7.18055 9.40434 7.09411 9.54926 7.04678 9.70855C6.99945 9.86784 6.99272 10.0364 7.02722 10.199C7.05122 10.314 7.63822 13.041 9.29822 14.701C10.9582 16.361 13.6852 16.948 13.8002 16.972C13.9628 17.0067 14.1314 17 14.2907 16.9527C14.4501 16.9054 14.595 16.8188 14.7122 16.701L16.0052 15.408L18.5912 17.994L16.5852 19.999C15.3372 19.978 11.0672 19.643 7.71222 16.287C4.34622 12.921 4.02022 8.636 4.00022 7.413L6.00522 5.408ZM19.9992 10.999H21.9992C21.9992 5.869 18.1262 2 12.9892 2V4C17.0512 4 19.9992 6.943 19.9992 10.999Z" fill="#FDCA00"></path><path d="M12.999 8C15.102 8 15.999 8.897 15.999 11H17.999C17.999 7.775 16.224 6 12.999 6V8Z" fill="#FDCA00"></path></svg></div>
						<div>info@abcfood.com</div></div>
					<div class="flex flex-row pt-3"><div class="mr-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9023 5.98096C11.309 5.98096 10.729 6.1569 10.2356 6.48655C9.74229 6.81619 9.35777 7.28473 9.13071 7.83291C8.90364 8.38109 8.84423 8.98429 8.95999 9.56623C9.07574 10.1482 9.36147 10.6827 9.78102 11.1023C10.2006 11.5218 10.7351 11.8076 11.3171 11.9233C11.899 12.0391 12.5022 11.9797 13.0504 11.7526C13.5986 11.5255 14.0671 11.141 14.3968 10.6477C14.7264 10.1543 14.9023 9.5743 14.9023 8.98096C14.9014 8.18559 14.5851 7.42305 14.0227 6.86064C13.4603 6.29822 12.6977 5.98186 11.9023 5.98096ZM11.9023 10.481C11.6057 10.481 11.3157 10.393 11.069 10.2282C10.8223 10.0633 10.6301 9.82907 10.5165 9.55498C10.403 9.28089 10.3733 8.97929 10.4312 8.68832C10.489 8.39735 10.6319 8.13008 10.8417 7.9203C11.0515 7.71052 11.3187 7.56766 11.6097 7.50978C11.9007 7.4519 12.2023 7.48161 12.4764 7.59514C12.7505 7.70867 12.9847 7.90093 13.1495 8.1476C13.3144 8.39428 13.4023 8.68429 13.4023 8.98096C13.4019 9.37864 13.2437 9.75991 12.9625 10.0411C12.6813 10.3223 12.3 10.4805 11.9023 10.481Z" fill="#FDCA00"></path><path d="M17.6676 3.21158C16.2423 1.7866 14.3396 0.940103 12.3269 0.835465C10.3141 0.730828 8.33391 1.37547 6.76849 2.64497C5.20307 3.91447 4.16338 5.71883 3.85009 7.70981C3.5368 9.7008 3.97212 11.7373 5.07202 13.4262L10.7395 22.1268C10.8657 22.3204 11.0381 22.4794 11.2412 22.5895C11.4444 22.6997 11.6718 22.7573 11.9029 22.7573C12.1339 22.7573 12.3613 22.6997 12.5645 22.5895C12.7676 22.4794 12.9401 22.3204 13.0662 22.1268L18.7339 13.4262C19.7545 11.8595 20.2055 9.98956 20.0114 8.12987C19.8172 6.27017 18.9898 4.53373 17.6676 3.21158ZM17.4771 12.6074L11.9029 21.1644L6.32865 12.6074C4.6224 9.98807 4.98835 6.48275 7.19879 4.27222C7.81653 3.65446 8.54991 3.16442 9.35704 2.83009C10.1642 2.49576 11.0292 2.32368 11.9029 2.32368C12.7765 2.32368 13.6416 2.49576 14.4487 2.83009C15.2559 3.16442 15.9892 3.65446 16.607 4.27222C18.8174 6.48275 19.1833 9.98807 17.4771 12.6074Z" fill="#FDCA00"></path></svg></div>

						<div>Menara Mandiri, Tower II, 20-21st Floor, Jl. Jend. Sudirman No.Kav. 54-55, RT.5/RW.3
						</div></div></div></div></div></div>
	<div class="bg-[#1A83E3] flex lg:p-0 p-8"><div class="lg:px-16 lg:py-2 text-white text-base lg:text-xs font-bold">© Copyright 2021 by ABC Food</div></div></footer>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center border-b border-gray-200"><div class="flex items-center justify-between"><a href="/" class="flex"><img src="navbar/Logo.png" alt="Champi Logo" class="w-40 hover:scale-110 hover:transition"></a>
		<div class="flex md:hidden"><button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg></button></div></div>

	<div class="${"text-[#1A83E3] flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 " + escape("hidden", true)}"><a class="hover:text-[#265785]" href="/services">Service</a>
		<a class="hover:text-[#265785]" href="/products">Products</a>
		<a class="hover:text-[#265785]" href="/brands">Our Brands</a>
		<a class="hover:text-[#265785]" href="/plantations">Plantation</a>
		<a class="hover:text-[#265785]" href="/abouts">About Us</a></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
	<main class="flex flex-col min-h-screen">${slots.default ? slots.default({}) : ``}</main>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
