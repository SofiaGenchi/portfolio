fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let divProyecto = document.querySelector('.proyecto');
    data.forEach(proyecto => {
        divProyecto.innerHTML += `
        <div class="card">
        <div class="image">
            <img src="${proyecto.img}" alt="${proyecto.descripcion}">
        </div>
         <div class="content">
           <a target="_blank" href="${proyecto.link}">
             <span class="title">
               ${proyecto.nombre}
             </span>
           </a>
       
           <p class="desc">${proyecto.descripcion}</p>
       
           <a class="action" target="_blank" href="${proyecto.linkGitHub}">GitHub</a>
         </div>
       </div>
        `
    })
  })
  .catch(error => console.error('Error:', error));

