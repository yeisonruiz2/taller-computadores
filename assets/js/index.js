fetch('data/taller.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const tituloPagina = document.getElementById('titulo_pagina');
        tituloPagina.innerHTML = data.titulo_pagina;

       

        const computadores = data.computadores;
        console.log(computadores);

        let computadoresHTML = '';
        for(i = 0; i < computadores.length; i++) {
            console.log(computadores[i].nombre);
            computadoresHTML += `<tr>
                <td>${computadores[i].nombre}</td>
                <td>${computadores[i].descripcion}</td>
                <td>${computadores[i].precio}</td>
            </tr>`;
        }

        const tablacomputadores = document.getElementById('tabla_computadores');
        tablacomputadores.innerHTML = computadoresHTML;

        const datos = document.getElementById('datos');
        datos.innerHTML = `<p id="nombre_pagina">Nombre: ${data.datos_tienda.nombre}</p>
                    <p id="correo_pagina">Correo: ${data.datos_tienda.correo}</p>
                    <p id="telefono_pagina">Telefono: ${data.datos_tienda.telefono}</p>
                    <p id="direccion_pagina">Dirección: ${data.datos_tienda.direccion}</p>`;
    });