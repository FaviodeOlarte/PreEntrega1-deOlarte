

const Item = ({ id, nombre, descripcion, precio, imgCard,linkCard }) => {
  return (
    <div className="col" key={id}>
      <a
        className="text-decoration-none text-dark h-100 w-100"
        onClick={linkCard}
      >
        <div className="card h-100" id="card">
          <img src={imgCard} className="card-img-top" />
          <div className="card-body h-100 d-flex flex-column">
            <h1 className="card-title fs-4">{nombre}</h1>
            <p className="card-text">{descripcion}</p>
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
      </a>
    </div>
  );
};

export { Item };
