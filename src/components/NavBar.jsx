const NavBar = (props) => {
    
    const alturaBusqueda={
        height:"27px"
    }
    const objetosDelCarrito =  "+" + 1

    return (


    <header class="container-fluid p-0">
        <nav
            class="row navbar navbar-expand-md bg-warning bg-gradient m-0 w-100"
        >


        <div className="container-fluid p-0">
                        <div className="col-2 col-sm-2 ps-lg-2 logo" >
                            <a className=" m-1" id="logo" title="Kangoo - Home" href="./index.html"><img src={props.urlLogo} alt="Kangoo" /></a>
                        </div>

                        {/* <!-- LOGO --> */}
                        <div className="col-7 col-sm-7" >
                            <form id="form-busqueda" className="d-flex" role="search"> 
                                 <input className="barraBusqueda" type="text" id="input-busqueda" placeholder="Buscar..." />
                                <button type="submit" id="buscarLogo" className="btn btn-outline-secondary mx-2 px-2 py-0 pt-1" >
                                    <span className="material-symbols-outlined " height="24px">search</span>
                                </button>
                            </form>
                            <div className="mt-2" style={alturaBusqueda}>
                                <ul id="categorias" className="d-flex justify-content-start list-unstyled ms-4 " >
                                    <li className="rounded-3 marcaRuta" ><a className="dropdown-item mx-3 " href="./index.html">Ropa</a></li>
                                    <li className="rounded-3"><a className="dropdown-item mx-3" href="./index.html">Ofertas</a></li>
                                    <li className="rounded-3"><a className="dropdown-item mx-3" href="./index.html">Tendencias</a></li>
                                </ul>   
                            </div>
                        </div>

                        {/* <!-- bucador --> */}
                        <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* <!-- Boton hambuerguesa --> */}
                        <div className="collapse navbar-collapse pt-2 " id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-2 ms-md-auto align-items-center pe-4">
                                <li id="nombreUsuario" className="nav-item ocultar ">
                                        </li>
                                <li className="nav-item mx-1 mx-lg-3 mx-xxl-5 ">
                                        <a id="usuario" className="nav-link" aria-current="page">

                                                <svg xmlns="http://www.w3.org/2000/svg" height="35px" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                                </svg>
                                        </a></li>

                                <li className="nav-item me-1">
                                        

                                         <a  id="carrito" className="nav-link position-relative" aria-current="page" >
                                         
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                 {objetosDelCarrito}
                                        <span class="visually-hidden">unread messages</span>
                                      </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                            </svg>
                                         </a>
                                </li>

                                <li  className="nav-item mx-1 mx-lg-3 mx-xxl-5">
                                            <a id="favorito" className="nav-link" aria-current="page">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" className="bi bi-heart-fill p-.5 mb-0" viewBox="0 -1 18 18">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                                </svg>
                                            </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
        </nav>
    </header>


        
        )
}

export default NavBar