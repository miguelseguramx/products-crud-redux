import React from 'react';
import { Link } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'
import { deleteProductAction } from '../actions/productsActions'

// sweetalert
import Swal from 'sweetalert2'

function Product({product}) {

  const dispatch = useDispatch()

  const confirmDelete = id =>{
    // confirmation with sweet alert

    Swal.fire({
      title: '¿Estas seguro?',
      text: "Una vez eliminado no podras restaurarlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado!',
          'Tu producto ha sido eliminado',
          'success'
        )

        dispatch(deleteProductAction(id))
      }
    })

  }



  return (
    <tr>
      <td>{product.name}</td>
      <td><span className='font-weight-bold'>$ {product.price}</span></td>
      <td className="acciones">
        <Link
          to = {`/productos/editar/${product.id}`}
          className= "btn btn-primary mr-2"
        >
          Editar
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => confirmDelete(product.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default Product;