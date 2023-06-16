import { NavLink } from "react-router-dom";
import { categorias } from "../../temp/data";


const CategoriasLateral =() => {

    return(
        <>
        <ul className="list-unstyled  text-dark">
                {categorias.map((categorias)=>(
                            
                        <li className="p-2">
                            <b>

                            <NavLink to={`/category/${categorias.id}`} className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-5">{categorias.name}</NavLink>
                            </b>
                        </li>
                        ))}
        </ul>
        </>
    )
}

export {CategoriasLateral}