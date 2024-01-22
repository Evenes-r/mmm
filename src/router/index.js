import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import AboutView from "../views/AboutView.vue";
import ContactsView from "../views/ContactsView.vue";
import DoctorsView from "../views/DoctorsView.vue";
import PriceView from "../views/PriceView.vue";
import ReviewsView from "../views/ReviewsView.vue";
import SalesView from "../views/SalesView.vue";
import ServicesView from "../views/ServicesView.vue";
import ArticlesView from "../views/ArticlesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
  {
    path: "/doctors",
    name: "doctors",
    component: DoctorsView,
  },
  {
    path: "/prices",
    name: "prices",
    component: PriceView,
  },
  {
    path: "/reviews",
    name: "reviews",
    component: ReviewsView,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
  {
    path: "/sales",
    name: "sales",
    component: SalesView,
  },
  {
    path: "/articles",
    name: "articles",
    component: ArticlesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
