

const Item = ({id , nombre,precio,descripcion,stock,catSexo,imgCard}) => {
    return (
     <div className="col text-dark mb-3" key={id}>
       {/* <a
         className="text-decoration-none text-dark h-100 w-100"
         onClick={}
       > */}
         <div className="card h-100 w-100" id="card">
           <img src={imgCard} className="card-img-top" />
           <div className="card-body h-100 d-flex flex-column">
             <h1 className="card-title fs-4">{nombre}</h1>
             <p className="card-text">{descripcion}</p>
             <p className="card-text">{stock}</p>
             <div className="d-flex  flex-fill justify-content-between align-items-end">
               <button
                 className="agregarAlCarritoCard"
                 onclick="agregarAlCArritoCards(this)"
               >
                 Agregar al carrito
               </button>
               <b>$ {precio}</b>
             </div>
           </div>
         </div>
       {/* </a> */}
     </div>

    // <div>
    //   <h2>{nombre}</h2>
    //   <ul>
    //     <li>{descripcion}</li>
    //     <li>{stock}</li>
    //     <li>{precio}</li>
    //     <li>{catSexo}</li>
    //     <img src={imgCard} className="card-img-top" />

        

    //   </ul>
    // </div>

  );
};

export { Item };
