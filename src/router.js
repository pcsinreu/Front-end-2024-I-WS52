import { createWebHistory, createRouter } from 'vue-router'
import FormBookComponent from "@/components/form-book.component.vue";
import FormBookBrandComponent from "@/components/form-book-brand.component.vue";
import FormBookPricingComponent from "@/components/form-book-pricing.component.vue";
import notFoundComponent from "@/components/not-found.component.vue";



const routes = [
    { path: '/', component: FormBookComponent },
    { path: '/brand', component: FormBookBrandComponent },
    { path: '/princing', component: FormBookPricingComponent },
    { path:  '/:pathMatch(.*)*', component: notFoundComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;