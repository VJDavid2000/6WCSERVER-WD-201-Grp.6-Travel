<!--
Name: David, Vincent Jericho C.
WD-201 (GROUP 6)
-->

<template>
  <div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand float-left">TravelExpressGo</a>

        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">HOME SITE</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create">Travel Log</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">Travel Forums</router-link>
          </li>
        </ul>
        
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
