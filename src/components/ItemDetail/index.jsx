const ItemDetail = ({id,nombre,descripcion,precio,imgCard,imgSub1,imgSub2,imgSub3,imgSub4}) =>{

    return(
        <div
            id="contePrincipal"
            className="container-fluid row m-0 p-0 pt-5 pb-sm-5 h-100 w-100" >
                <div className="row col-sm-8 w-sm-100 col-12 h-100" >
                    <div 
                        id="imgLateral" 
                        className="row col-lg-3 w-sm-100 col-12 pe-0 p-0 pt-3 ps-xl-4 ps-xxl-5 pe-xxl-4 ms-0 d-flex justify-content-center" >

                        </div>
                    <div 
                        id="imgPrinc" 
                        className="row h-100 col-lg-9 col-12 pt-2 pt-lg-3 d-flex justify-content-center" >

                            <img className="p-0" src={imgCard} alt="" />
                        </div>
                </div>

            <div
                id="conteDetalles"
                className="col-sm-4 col-12 mt-2 mt-sm-0 pt-5 ps-0 h-100">

                <h1>{nombre}</h1>
                <h2 className="d-flex justify-content-end pe-2">
                    <b>$ {precio}</b>
                </h2>
                <p className="h-auto" >{descripcion}</p>


             <button class="comprar mb-1"><b>COMPRAR</b></button>
            <button class="agregarAlCarrito mt-1">
                <b>AGREGAR AL CARRITO</b>
            </button>
            <ul class="masDetalles">
                <li>+ Detalles</li>
                <li>+ Envios y devoluciones</li>
            </ul>

                </div>

        </div>
    )
}
export {ItemDetail}