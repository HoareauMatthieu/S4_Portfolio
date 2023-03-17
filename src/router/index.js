import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'

import ArtdirectionView from '../views/ArtdirectionView.vue'
import IlluView from '../views/IlluView.vue'
import ContactView from '../views/ContactView.vue'
import ScolaireView from '../views/ScolaireView.vue'
import AproposView from '../views/AproposView.vue'
import MentionsView from '../views/MentionsView.vue'
import GdsView from '../views/GdsView.vue'
import CapView from '../views/CapView.vue'
import BleuView from '../views/BleuView.vue'
import DeemaxView from '../views/DeemaxView.vue'
import UgbView from '../views/UgbView.vue'
import RougeView from '../views/RougeView.vue'
import BBView from '../views/BBView.vue'
import P404View from '../views/P404View.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
,
    { path: '/artdirection', name: 'Artdirection', component: ArtdirectionView },
    { path: '/illu', name: 'Illu', component: IlluView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/scolaire', name: 'Scolaire', component: ScolaireView },
    { path: '/Apropos', name: 'Apropos', component: AproposView },
    { path: '/mentions', name: 'Mentions', component: MentionsView },
    { path: '/style-guide', name: 'style-guide', component: GdsView },
    { path: '/cap', name: 'cap', component: CapView },
    { path: '/bleu', name: 'bleu', component: BleuView },
    { path: '/deem', name: 'deem', component: DeemaxView },
    { path: '/ugb', name: 'ugb', component: UgbView },
    { path: '/rouge', name: 'rouge', component: RougeView },
    { path: '/bb', name: 'bb', component: BBView },


    {
      path: '/:pathMatch(.*)*',
      name: 'page404',
      component: P404View
    },
    // ici les autre routes
  ]
})

export default router
