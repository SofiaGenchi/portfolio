fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let divProyecto = document.querySelector('.proyecto');
    data.forEach(proyecto => {
        divProyecto.innerHTML += `
        <div class="card">
        <div class="image"></div>
         <div class="content">
           <a href="#">
             <span class="title">
               ${proyecto.nombre}
             </span>
           </a>
       
           <p class="desc">${proyecto.descripcion}</p>
       
           <a class="action" href="#">
             Find out more
             <span aria-hidden="true">
               →
             </span>
           </a>
         </div>
       </div>
        `
    })
  })
  .catch(error => console.error('Error:', error));

