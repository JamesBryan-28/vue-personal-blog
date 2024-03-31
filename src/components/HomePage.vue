<template>
  <div class="home-page">
    <!-- Header Section -->
    <header class="header">
      <div class="profile-container">
        <div class="profile-image"></div>
        <div class="site-info">
          <h1 class="site-title">James Bryan N. Dumail</h1>
          <p class="site-description">Personal Blog</p>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h2 class="welcome-message" id="welcome-message">Welcome to My Blog</h2>
        <div class="explore-message">
          <span class="explore-box">Embark on a journey through captivating narratives, enlightening articles, and much more.</span>
        </div>
        <router-link to="/about" class="btn">Learn More</router-link>
      </div>
    </section>

    <!-- Featured Posts Section -->
    <section class="featured-posts">
      <h2>Featured Posts</h2>
      <div class="post-card-container">
        <!-- Featured Post Cards -->
        <div class="post-card">
          <img src="@/assets/images/GALLERY.jpg" alt="Gallery Image">
          <h3>Gallery</h3>
          <p>Explore breathtaking images and captivating moments from my expertise being an IT, Technician.</p>
          <router-link to="/gallery" class="btn">Explore</router-link>
        </div>
        <div class="post-card">
          <img src="@/assets/images/EVENTS.jpg" alt="Events Image">
          <h3>Events</h3>
          <p>Stay informed and up-to-date with the latest events and occurrences.</p>
          <router-link to="/events" class="btn">Explore</router-link>
        </div>
        <div class="post-card">
          <img src="@/assets/images/HOBBIES.jpg" alt="Hobbies Image">
          <h3>Hobbies</h3>
          <p>Explore my hobbies and interests in detail.</p>
          <router-link to="/hobbies" class="btn">Explore</router-link>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="about-content">
        <h2>About Me</h2>
        <p>Greetings, I'm James Bryan N. Dumail, the founder of this platform. With a background in IT, technical expertise, and a passion for programming, I'm dedicated to providing valuable insights, technical knowledge, and programming expertise through this blog. Join me as we explore the intricate world of technology together.</p>
        <router-link to="/about" class="btn">Learn More</router-link>
      </div>
    </section>



  </div>
</template>

<script>

export default {
  name: 'HomePage',
  mounted() {
    this.animateWelcomeMessage();
  },
  methods: {
    animateWelcomeMessage() {
      const welcomeMessage = document.getElementById('welcome-message');
      const text = welcomeMessage.innerText;
      welcomeMessage.innerHTML = ''; 
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.textShadow = `
          -2px -2px 2px #004080,   /* Navy Blue */
          2px -2px 2px #008080,    /* Teal */
          -2px 2px 2px #00CCCC,    /* Cyan */
          2px 2px 2px #00FF80,     /* Spring Green */
          -2px 4px 2px #800080,    /* Purple */
          2px 4px 2px #804000      /* Brown */
        `; 
        welcomeMessage.appendChild(span);
      }
    }
  }
}

</script>

<style scoped>
/* Your existing styles */
.home-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Header Section Styles */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.profile-container {
  display: flex;
  align-items: center;
}

.profile-image {
  width: 80px;
  height: 80px;
  background-image: url('@/assets/images/DUMAIL.jpg');
  background-size: cover; 
  border-radius: 50%;
}

.site-info {
  text-align: left;
  margin-left: 20px; 
}

.site-title {
  font-size: 2rem;
  margin: 0;
}

.site-description {
  margin: 5px 0;
}

/* Hero Section Styles */
.hero {
  text-align: center;
  margin-top: 50px;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.welcome-message {
  font-size: 5rem;
  margin-bottom: 20px;
  display: inline-block;
  cursor: pointer;
}

.explore-message {
  font-size: 2rem;
  margin-bottom: 20px;

}

.explore-box {
  background-color: #00000000;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
}

/* Featured Posts Section Styles */
.featured-posts {
  text-align: center;
  margin-top: 50px;
}

.post-card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.post-card {
  position: relative;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-image: url('@/assets/images/CARDS.jpg');
  transition: transform 0.3s ease;
  cursor: pointer;
}

.post-card:hover {
  transform: scale(1.05);
}

.post-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.post-card-content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 8px;
  color: #ffffff;
  transition: opacity 0.3s ease;
  opacity: 0;
}

.post-card:hover .post-card-content {
  opacity: 1;
}

.post-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.post-card p {
  margin-bottom: 20px;
}


/* About Section Styles */
.about {
  text-align: center;
  margin-top: 50px;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about h2 {
  margin-bottom: 20px;
}

.about p {
  margin-bottom: 20px;
}


.btn {
  padding: 10px 20px;
  background-color: rgb(36, 62, 134);
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0739db;
}
</style>
