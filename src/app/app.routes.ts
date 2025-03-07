import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'name-to-gender',
    loadComponent: () => import('./name-to-gender/name-to-gender.page').then( m => m.NameToGenderPage)
  },

  {
    path: 'country-nameo-flag',
    loadComponent: () => import('./country-nameo-flag/country-nameo-flag.page').then( m => m.CountryNameoFlagPage)
  },
  {
    path: 'name-to-univerities',
    loadComponent: () => import('./name-to-univerities/name-to-univerities.page').then( m => m.NameToUniveritiesPage)
  },
  {
    path: 'weather',
    loadComponent: () => import('./weather/weather.page').then( m => m.WeatherPage)
  },
  {
    path: 'pokemon',
    loadComponent: () => import('./pokemon/pokemon.page').then( m => m.PokemonPage)
  },
  {
    path: 'wordpress-news',
    loadComponent: () => import('./wordpress-news/wordpress-news.page').then( m => m.WordpressNewsPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'name-to-age',
    loadComponent: () => import('./name-to-age/name-to-age.page').then( m => m.NameToAgePage)
  },
];
