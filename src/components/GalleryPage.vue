<template>
  <div class="gallery">
    <h1>My Gallery</h1>
    <div class="image-grid">
      <!-- Image cards -->
      <div class="image-card">
        <img src="@/assets/images/GALLERY/gal1.jpg" alt="Image 1">
        <div class="overlay"></div>
      </div>
      <div class="image-card">
        <img src="@/assets/images/GALLERY/gal2.jpg" alt="Image 2">
        <div class="overlay"></div>
      </div>
      <div class="image-card">
        <img src="@/assets/images/GALLERY/gal3.jpg" alt="Image 3">
        <div class="overlay"></div>
      </div>
      <div class="image-card">
        <img src="@/assets/images/GALLERY/gal4.jpg" alt="Image 4">
        <div class="overlay"></div>
      </div>
      <div class="image-card">
        <img src="@/assets/images/GALLERY/gal5.jpg" alt="Image 5">
        <div class="overlay"></div>
      </div>
      <div class="image-card">
        <img src="@/assets/images/GALLERY/gal6.jpg" alt="Image 6">
        <div class="overlay"></div>
      </div>
      <div class="image-card">
        <img src="@/assets/images/GALLERY/gal7.jpg" alt="Image 7">
        <div class="overlay"></div>
      </div>
      <div class="image-card">
        <img src="@/assets/images/GALLERY/gal8.jpg" alt="Image 8">
        <div class="overlay"></div>
      </div>
      <div class="image-card">
        <img src="@/assets/images/GALLERY/gal9.jpg" alt="Image 9">
        <div class="overlay"></div>
      </div>
      <div class="image-card">
        <img src="@/assets/images/GALLERY/gal10.jpg" alt="Image 10">
        <div class="overlay"></div>
      </div>
      <div class="image-card">
        <img src="@/assets/images/GALLERY/gal11.jpg" alt="Image 11">
        <div class="overlay"></div>
      </div>
      <div class="image-card">
        <img src="@/assets/images/GALLERY/gal12.jpg" alt="Image 12">
        <div class="overlay"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryPage',
}
</script>

<style scoped>
.gallery {
  padding: 50px;
  text-align: center;
  background-image: url('@/assets/images/background.jpg');
  background-size: cover;
  background-attachment: fixed; 
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.image-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 300px; 
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  display: block;
  transition: transform 0.3s;
}

.image-card:hover img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
}

.image-card:hover .overlay {
  opacity: 1;
}

.overlay:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border: 2px solid #fff;
  border-radius: 50%;
  box-sizing: border-box;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0;
  }
}
</style>
