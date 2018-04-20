// 0. Si utilizas un sistema de empaquetamiento de módulos (por ejemplo, a través de vue-cli), importa Vue y VueRouter y luego ejecuta Vue.use(VueRouter).
Vue.component('view-home', {
  data:function () {
    return {
      count: 0,
      notas: [
        {caption: 'nota1', description: 'Esta es mi nota #1'},
        {caption: 'nota2', description: 'Esta es mi nota #2'},
        {caption: 'nota3', description: 'Esta es mi nota #3'},
        {caption: 'nota4', description: 'Esta es mi nota #4'},
        {caption: 'nota5', description: 'Esta es mi nota #5'},
      ],
    }
  },
  template: `
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
    <div class="columns" v-for="text in notas">
    <div class="column">
      <div class="notification is-info">
        <button class="delete"></button>
          <h2 class="is-size-1">{{text.caption}}</h2>  
          <p>{{text.description}}</p>
      </div>
    </div>
    </div>
    </div>
  </div>
  `,
})

Vue.component('view-high', {
  template: `
    <div>
      <h2>Texto con prioridad alta</h2>  
    </div>
  `,
})

Vue.component('view-medium', {
  template: `
    <div>
      <h2>Tester component</h2>  
    </div>
  `,
})

Vue.component('view-low', {
  template: `
    <div>
      <h2>Tester component2</h2>  
    </div>
  `,
})
/*
new Vue({
  el : '#view-container',
  template : '<view-home/>'
})
*/
// 1. Define componentes de enrutamiento.
// Estos pueden ser importados desde otros archivos
const Home = { template: '<view-home/>' }
const High = { template: '<view-high/>' }
const Medium = { template: '<view-medium/>' }
const Low = { template: '<view-low/>' }

// 2. Define algunas rutas
// Cada ruta debe mapear a un componente. El "componente" puede
// ser un constructor de componente creado a través de
// Vue.extend(), o simplemente un objeto de opciones de componente.
// Más tarde hablaremos acerca de las sub-rutas.
const routes = [
  { path: '/', component: Home },
  { path: '/high', component: High },
  { path: '/medium', component: Medium },
  { path: '/low', component: Low },
]

// 3. Crea una instancia del _router_ y pasa la opción `routes`
// Puedes pasar opciones adicionales aquí,
// pero mantengámoslo simple por el momento.
const router = new VueRouter({
  routes// forma corta para routes: routes #:[{ path:'/:text', component: Home}]
})

// 4. Crea y monta la instancia principal.
// Asegúrate de inyectar el _router_ con la opcion router para
// garantizar que toda la aplicación tenga acceso al mismo.
const app = new Vue({
  router,
  data: {
    title: 'SimpleText',
    priority:[{name: 'High', link: '/high'},{name: 'Medium', link: '/medium'},{name: 'Low', link: '/low'},],
    category: [{name: 'Category 1'},{name: 'Category 2'},{name: 'Category 3'}]
  }
}).$mount('#app')

//console.log(window.location.pathname);
