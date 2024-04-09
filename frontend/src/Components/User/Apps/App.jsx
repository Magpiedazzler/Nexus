import React from 'react'
import './App.css'

export default function App() {
  return (
    <div>
      <div class="topnav">
            <h2 id='t2'>Nexus</h2>
            <input type="text" id='search' placeholder='Search..'/>
            <button id='searchicon'><i class="bi bi-search" id='search1'></i></button>
            <select name="" id="filter">
                <option value="">Choose OS</option>
                <option value="">Windows</option>
                <option value="">Linux</option>
                <option value="">Mac</option>
            </select>
            <button id='notification'><i class="bi bi-bell" id='notify'></i></button>
            <button id='profileicon'><i class="bi bi-person-circle" id='profile'></i></button>
        </div>
        
        <div class="div2">
    <section>
        <div class="container">
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <button id="hm"><i class="bi bi-house"id='home'>Home</i><br /><br /></button>
                <button id="ap"><i class="bi bi-app"id='app'>Apps</i><br /><br /></button>
                <button id="gm"><i class="bi bi-controller" id='game'>Games</i><br /><br /></button>
                <button id="lb"><i class="bi bi-collection"id='library'>Library</i><br /><br /></button>
                <button id="hp"><i class="bi bi-patch-question" id='help'>Help</i><br /><br /></button>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id="menu">
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators" id=''>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner" id='sub'>
                            <div class="carousel-item active">
                            <img src={imageOne} class="d-block w-100" alt="First"/>
                            </div>
                            <div class="carousel-item">
                            <img src={imageOne} class="d-block w-100" alt="Second"/>
                            </div>
                            <div class="carousel-item">
                            <img src={imageOne} class="d-block w-100" alt="Third"/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="card" id='hdiv'>
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">App Name</h5>
                            <p class="card-text">ratings</p>
                            <a href="#" class="btn btn-primary" id='ha'>Get</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    </div>
  )
}
