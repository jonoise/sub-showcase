import React from 'react'

const DocsIndex = () => {
  return (
    <div>
      <p>La página principal de los docs! :D</p>
      <p>
        Click{' '}
        <a style={{ color: 'blue' }} href='/feature'>
          aquí
        </a>{' '}
        para viajar a una ruta dentro de este subdominio.
      </p>
    </div>
  )
}

export default DocsIndex
