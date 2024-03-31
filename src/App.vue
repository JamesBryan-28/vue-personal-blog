<template>
  <div id="app">
    <!-- Navigation Links -->
    <div class="navbar">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
      <router-link to="/gallery" class="nav-item">Gallery</router-link>
      <router-link to="/events" class="nav-item">Events</router-link>
      <router-link to="/hobbies" class="nav-item">Hobbies</router-link>
    </div>

    <!-- Route Content -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body, #app {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-image: url('@/assets/images/background.jpg');
  background-size: cover;
}

.navbar {
  background-image: url('@/assets/images/BANNER2.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat; 
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
}

.nav-item {
  text-decoration: none;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add box-shadow transition */
  font-weight: bold;
  font-size: 1.1rem;
  background-color: transparent; /* Set initial background color to transparent */
}

.nav-item:hover {
  background-color: #ffffff; /* Change background color on hover */
  color: #000000; /* Change text color to black on hover */
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); /* Add box shadow on hover */
  transform: scale(1.05); /* Enlarge the nav-item when hovered over */
}

</style>
