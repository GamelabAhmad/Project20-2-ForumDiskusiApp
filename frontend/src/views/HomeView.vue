<template>
  <nav class="navbar navbar-expand-md fixed-top custom-navbar">
    <div class="container">
      <router-link to="/dashboard" class="navbar-brand">TechOnWhy</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarHeader">
        <ul class="navbar-nav ms-auto mb-2 mb-md-0 d-flex">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item spacer"></li>
          <li class="nav-item">
            <router-link to="/discussions" class="nav-link">Discussions</router-link>
          </li>
          <li class="nav-item spacer"></li>
          <li class="nav-item">
            <router-link to="/about-us" class="nav-link">About Us</router-link>
          </li>
          <li class="nav-item ms-auto">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            </form>
          </li>
          <li class="nav-item">
            <router-link to="/login"><a class="nav-link" style="cursor:pointer">Sign In</a></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <section id="home" class="hero">
    <div class="container mt-5">
      <div class="row">
        <div id="txt" class="col-md-6 mb-4">
          <h5 class="ajakan">Let's start talking about IT, AI, and design!</h5>
          <h2 class="title">
            TECH ON WHY <br>FORUM DISCUSSION
          </h2>
          <h5 class="tagline">Empowering TechOnWhy to connect, share, and learn.</h5>
          <div class="button-block">
            <router-link to="/register"><button class="button btn custom-btn">Sign Up</button></router-link>
            <button class="button btn custom-btn-outline">Join Disscussion</button>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-end align-items-center">
          <img src="../assets/img/gambar1.png" alt="TechOnWhy Logo" class="logo">
        </div>
      </div>
    </div>
  </section>

  <section id="disscussion">
    <div class="container text-center mt-5">
      <div class="row">
        <div class="col-md-4">
          <img src="../assets/icon/discussions.png" alt="Discussions Icon" class="stat-icon">
          <h5 class="stat-title">Discussions</h5>
          <p class="stat-number">51,875</p>
        </div>
        <div class="col-md-4">
          <img src="../assets/icon/answer.png" alt="Answers Icon" class="stat-icon">
          <h5 class="stat-title">Answers</h5>
          <p class="stat-number">121,984</p>
        </div>
        <div class="col-md-4">
          <img src="../assets/icon/users.png" alt="Users Icon" class="stat-icon">
          <h5 class="stat-title">Users</h5>
          <p class="stat-number">11,675</p>
        </div>
      </div>
    </div>
  </section>

  <section id="help-others" class="help-others">
    <div class="container mt-5">
      <h5 class="section-title">Help Others</h5>
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">How to Write Code that Saves Time and Space</h5>
              <p class="card-text">Algorithmic thinking is about combining rigorous logic and creativity to frame,
                solve, and analyze problems efficiently.</p>
              <div class="d-flex justify-content-between">
                <span class="badge bg-primary">AI</span>
                <span class="user-info">byronk <small>1 minute ago</small></span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">90% of designers are unhirable?</h5>
              <p class="card-text">Here's the harsh truth: I've reviewed more than 1.000 portfolios in my design career
                so far, and turned 90% of them down.</p>
              <div class="d-flex justify-content-between">
                <span class="badge bg-danger">Design</span>
                <span class="user-info">bryand <small>1 hour ago</small></span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">How To Create Tabs Component With React</h5>
              <p class="card-text">The idea was to create a reusable component without any components library or
                third-party module</p>
              <div class="d-flex justify-content-between">
                <span class="badge bg-success">Front-end</span>
                <span class="user-info">bryand <small>2 days ago</small></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contribute" class="contribute">
    <h2>Ready to contribute?</h2>
    <p>Want to make a big impact?</p>

    <div class="button-group">
      <router-link to="/register"><button class="button btn custom-btn">Sign Up</button></router-link>
      <button class="button btn custom-btn-outline">Join Disscussion</button>
    </div>
  </section>

  <section class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <a href="#" class="footer-logo">TECHONWHY</a>
        <p class="footer-text">Empowering TechOnWhy to connect, share, and learn.</p>
      </div>
      <div class="footer-links">
        <ul class="list-unstyled">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Discussion</a></li>
        </ul>
        <div class="footer-contact">
          <p class="contact-text">Contact Us: <a href="mailto:tow@gmail.com">tow@gmail.com</a></p>
        </div>
      </div>

    </div>
    <div class="footer-copyright">
      <p class="copyright-text">&copy; 2024 techonwhy. All rights reserved.</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.custom-navbar {
  background-color: #251D59;
}

.custom-navbar .navbar-brand,
.custom-navbar .nav-link {
  color: #D3D6DB !important;
}

.custom-navbar .nav-link:hover {
  color: #FFFFFF !important;
}

.navbar-nav .nav-link {
  padding: 10px;
}

.navbar-nav .spacer {
  padding: 10px;
}

.logo {
  max-width: 80%;
  height: auto;
}

.ajakan {
  font-size: 20px;
  font-weight: medium;
  padding-top: 40px;
  margin-bottom: 20px;
}

.title {
  font-weight: bold;
  font-size: 36px;
  padding-top: 20px;
}

.tagline {
  font-size: 16px;
  font-weight: medium;
  padding-top: 20px;
}

.hero {
  margin-top: 121px;
  text-align: left;
  height: auto;
}

.button-block,
.button-group {
  display: flex;
  gap: 16px;
  padding-top: 20px;
}

.button-block .custom-btn {
  background-color: #251D59;
  color: #FFFFFF;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.button-block .custom-btn-outline {
  background-color: transparent;
  color: #251D59;
  border: 1px solid #251D59;
  border-radius: 20px;
  padding: 8px 18px;
  font-size: 16px;
  cursor: pointer;
}

.button-block .custom-btn:hover,
.button-block .custom-btn-outline:hover {
  background-color: #1b1543;
  color: #FFFFFF;
  border-color: #1b1543;
}

.stats {
  margin-top: 50px;
}

.stat-icon {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}

.stat-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.stat-number {
  font-size: 18px;
  color: #555;
}

@media (max-width: 768px) {
  .navbar-nav .ms-auto {
    margin-left: 0;
  }

  .hero {
    margin-top: 50px;
  }

  .hero .title {
    font-size: 32px;
    padding: 10px 0;
  }

  .hero .ajakan,
  .hero .tagline {
    font-size: 14px;
  }

  .button-block {
    bottom: -80px;
  }
}

#help-others {
  background-color: #D3D6DB;
  display: flex;
}

#help-others .section-title {
  font-size: 32px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.help-others .card {
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.help-others .card-body {
  flex: 1;
  padding: 20px;
}

.help-others .card-title {
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
}

.help-others .card-text {
  color: #414141;
  font-size: 12px;
  text-align: justify;
}

.help-others .badge {
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 20px;
}

.help-others .user-info {
  color: #414141;
  font-size: 12px;
}

.help-others .badge-primary {
  background-color: #007bff;
}

.help-others .badge-danger {
  background-color: #dc3545;
}

.help-others .badge-success {
  background-color: #28a745;
}

.contribute {
  padding: 30px;
  text-align: center;
}

.contribute h2 {
  font-size: 30px;
  margin-bottom: 16px;
}

.contribute p {
  font-size: 18px;
  margin-bottom: 16px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.contribute .button-group .custom-btn {
  background-color: #251D59;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
}

.contribute .button-group .custom-btn-outline {
  background-color: transparent;
  color: #251D59;
  border: 1px solid #251D59;
  border-radius: 20px;
  padding: 8px 18px;
  font-size: 16px;
  cursor: pointer;
}

.button-group .custom-btn:hover,
.button-group .custom-btn-outline:hover {
  background-color: #1b1543;
  color: #FFFFFF;
  border-color: #1b1543;
}

.footer {
  background-color: #251D59;
  color: #fff;
  padding: 40px 0;
  text-align: center;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
}

.footer-content {
  flex-basis: 60%;
}

.footer-logo {
  font-family: "Arial", sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-text {
  font-size: 16px;
  margin-bottom: 15px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  display: inline-block;
  margin-right: 20px;
}

.footer-links a {
  color: inherit;
  text-decoration: none;
}

.footer-contact {
  flex-basis: 40%;
  text-align: right;
}

.footer-copyright {
  width: 100%;
  text-align: center;
  margin: 20px 0px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.copyright-text {
  font-size: 14px;
}
</style>