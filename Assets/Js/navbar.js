let head = document.getElementById("header").innerHTML = `
<nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="Assets/Images/logo-01.png" alt="Logo" width="100" height="80" class="d-inline-block align-text-top">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link fw-bold active me-3" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link fw-bold active me-3" href="AboutUs.html">About Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fw-bold active me-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item " href="Smartlights.html">Smart Lights</a></li>
            <li><a class="dropdown-item " href="bulbs.html">Bulbs</a></li>
            <li><a class="dropdown-item" href="SpotLights.html">Spot Lights</a></li>
            <li><a class="dropdown-item" href="Decorationlights.html">Decoration Lights</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold active me-3" href="Feedback.html" target="_blank">Feedback</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold active me-3" href="Gallery.html" target="_blank">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold active me-3" href="Contactus.html">ContactUs</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link fw-bold active me-3" href="Querieslink.html">Queries link</a>
        </li>
 <li class="nav-item">
          <a class="nav-link fw-bold active me-3" href="abc.html">Sitemap</a>
        </li>


        
        
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;