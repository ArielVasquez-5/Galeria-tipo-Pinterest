// =================================================================================================================================================
// Lo ideal seria consumir las imagenes desde una API traida de la base de datos, pero gitpages no me deja trabajar con bases de datos ni backend
// =================================================================================================================================================

let imagenes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
let galeria = document.getElementById('galeria');

for(imagen of imagenes){
    galeria.innerHTML += `
    <div class="card">
        <a href="#" data-toggle="modal" data-target="#id${imagen}"> 
            <img class="card-img-top" src="img/${imagen}.jpg" alt="">
        </a>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
        <button type="button" class="close mr-2" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <img src="img/${imagen}.jpg" alt="" class="img-fluid rounded">
        </div>
    </div>
    `;
}