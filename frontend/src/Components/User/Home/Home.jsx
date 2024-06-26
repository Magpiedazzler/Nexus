import React, { useEffect, useState } from 'react'
import imageOne from "./12.jpg"
import './Home.css'
import { getUploadedApps } from '../../../Services/userApi'
import { Link } from 'react-router-dom'

export default function Home() {

    const [appDetails,setAppDetails]=useState([])

    const DownloadSelectedApp=(apkFile)=>{
        console.log(apkFile,'%%%%%')
        const fileUrl=`http://localhost:4000/img/${apkFile}`
        const link=document.createElement('a')
        link.href=fileUrl
        link.setAttribute('download','')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    useEffect(()=>{
        getUploadedApps().then((value)=>{
            console.log(value?.data?.data,"$$$")
            setAppDetails(value?.data?.data)
        });
    },[]);
  return (
    <div>
        <div class="div2" id='div2'>
            <section>
                <div class="container">
                    <div class="row">
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
                            {appDetails.length>0 ?(
                                appDetails.map((value,id)=>(
                            <div class="card" id='hdiv' key={id}>
                                <img src={`http://localhost:4000/img/${value?.appIcon}`} id='himg' class="card-img-top" alt="..."/>
                                <Link to={'../install'}><div class="card-body">
                                    <h5 class="card-title" id='hh'>{value?.appName}</h5><br />
                                    <p class="card-text">{value?.category}</p>
                                    <button id='hb' onClick={DownloadSelectedApp(value?.apkFile)}><i class="bi bi-download" id='hi'></i>Download</button>
                                </div></Link>
                            </div>
                                ))
                            ):null}
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
