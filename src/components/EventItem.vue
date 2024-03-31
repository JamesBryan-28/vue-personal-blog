<template>
  <div class="events-container">
    <h2>Events</h2>
    <div class="event-card">
      <div class="event-image">
        <img src="@/assets/images/EVENTS/hackforgov.jpg" alt="HackforGov">
      </div>
      <div class="event-info">
        <h3>HackforGov</h3>
        <p>A hackathon focused on developing solutions for government challenges.</p>
      </div>
    </div>
    <div class="event-card">
      <div class="event-image">
        <img src="@/assets/images/EVENTS/pitching.jpg" alt="Pitching Competition">
      </div>
      <div class="event-info">
        <h3>Pitching Competition</h3>
        <p>An opportunity for entrepreneurs to pitch their startup ideas to investors.</p>
      </div>
    </div>
    <div class="event-card">
      <div class="event-image">
        <img src="@/assets/images/EVENTS/esports.jpg" alt="Esports Tournament">
      </div>
      <div class="event-info">
        <h3>Esports Tournament (PSITS)</h3>
        <p>A competitive gaming event featuring various esports titles.</p>
      </div>
    </div>
  </div>
</template>

<style>
.events-container {
  text-align: center;
  margin-top: 50px;
}

.events-container h2 {
  margin-bottom: 30px;
}

.event-card {
  display: flex;
  flex-direction: row; 
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  max-width: 600px; 
  margin: 0 auto; 
}

.event-card:hover {
  transform: translateY(-5px);
}

.event-image {
  width: 40%; 
  overflow: hidden;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.event-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.event-info {
  width: 60%; 
  padding: 20px;
  background-color: #3b3434; 
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.event-info h3 {
  margin-top: 0;
}

.event-info p {
  margin-bottom: 0;
}


</style>
