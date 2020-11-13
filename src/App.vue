<template>
<div>
    <div id="nav" bottom="0">
        <router-link to="/">Lista de Libros</router-link> |
        <router-link to="/create">Crear Libros</router-link>
    </div>
    <router-view />
</div>
</template>

<style>
#app {

    font-family: 'Stalinist One', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #d1d3d4;
}

#nav {
    padding: 30px;

}

#nav a {
    font-weight: bold;
    color: #dee5ec;
}

#nav a.router-link-exact-active {
    color: white;
}

</style>
