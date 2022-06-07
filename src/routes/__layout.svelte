<script lang="ts">
    import { Header, Footer } from '$general/index'
    import { NavMain } from '$globals/navigation/index'
    import '$styles/app.css';
    import "flowbite/dist/flowbite.css";
</script>
  
<div class="w-full h-auto relative">
    <NavMain />
    <Header />
        <main class="w-full h-auto">
            <slot />
        </main>
    <Footer />
    <!-- Footer bar Mobile -->
    <div class="fixed inset-x-0 bottom-0 w-full h-24 sm:block md:hidden border-t-4">
        <div class="grid grid-cols-3 gap-4 w-full h-16 bg-white shadow">
            <div class="col-span-1 w-full h-auto flex justify-center items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6 bi bi-shop-window" viewBox="0 0 16 16">
                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </span>
            </div>
            <div class="col-span-1 w-full h-auto flex justify-center items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6 bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </span>
            </div>
            <div class="col-span-1 w-full h-auto flex justify-center items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6 bi bi-percent" viewBox="0 0 16 16">
                        <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                      </svg>
                </span>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-4 w-full h-auto py-2 bg-gray-50 shadow border">
            <div class="col-span-1 w-full h-auto flex justify-center items-center">
                <span class="text-xs uppercase"><small>Shop</small></span>
            </div>
            <div class="col-span-1 w-full h-auto flex justify-center items-center">
                <span class="text-xs uppercase"><small>My Account</small></span>
            </div>
            <div class="col-span-1 w-full h-auto flex justify-center items-center">
                <span class="text-xs uppercase"><small>Promo</small></span>
            </div>
        </div>
    </div>
</div>