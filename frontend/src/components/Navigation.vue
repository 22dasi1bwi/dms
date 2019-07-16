<template>
<nav class="bg-white px-8 pt-2 my-2 border-b">
    <div class="-mb-px flex relative">
        <router-link
                exact
                to="/"
                active-class="border-blue-600 hover:border-blue-600"
                class="no-underline text-center block text-blue-600 font-medium mr-3 border-b-2 pt-2 pb-3 px-3 inline-block hover:border-blue-900 hover:text-blue-900 border-transparent">
            Home
        </router-link>
        <router-link
                to="/phrases/search"
                active-class="border-blue-600 hover:border-blue-600"
                class="no-underline text-center block text-blue-600 font-medium mr-3 border-b-2 pt-2 pb-3 px-3 inline-block hover:border-blue-900 hover:text-blue-900 border-transparent">
            Search Phrase
        </router-link>
        <router-link
                to="/phrases/add"
                active-class="border-blue-600 hover:border-blue-600"
                class="no-underline text-center block text-blue-600 font-medium mr-3 border-b-2 pt-2 pb-3 px-3 inline-block hover:border-blue-900 hover:text-blue-900 border-transparent">
            Add Phrase
        </router-link>
        <router-link
                exact
                to="/phrases/popular"
                active-class="border-blue-600 hover:border-blue-600"
                class="no-underline text-center block text-blue-600 font-medium mr-3 border-b-2 pt-2 pb-3 px-3 inline-block hover:border-blue-900 hover:text-blue-900 border-transparent">
            Popular
        </router-link>
    </div>
</nav>
</template>
