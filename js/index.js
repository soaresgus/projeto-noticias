const nav = document.getElementById('nav');

const sticky_btn = document.getElementById('sticky');

const search_bar = document.getElementById('search-bar');
const search_btn = document.getElementById('search');

const estado = document.getElementById('estados');
const brasil_nav = document.getElementById('brasil');

const int_nav = document.getElementById('internacional');
const int_item = document.getElementById('mundo')

const cat_nav = document.getElementById('categorias');
const cat_item = document.getElementById('tipos');

function sticky() {
    if (nav.classList.contains('ativo')) {
        sticky_btn.innerHTML = 'lock_open';
    } else {
        sticky_btn.innerHTML = 'lock';
    }

    nav.classList.toggle('ativo');


}

function search() {
    search_bar.classList.toggle('ativo');

    if (search_bar.classList.contains('ativo')) {
        search_btn.innerHTML = 'search_off';
    } else {
        search_btn.innerHTML = 'search';
    }

    if (estado.classList.contains('ativo')) {
        estado.classList.toggle('ativo');
    }

    if (int_item.classList.contains('ativo')) {
        int_item.classList.toggle('ativo');
    }

    if (cat_item.classList.contains('ativo')) {
        cat_item.classList.toggle('ativo');
    }
}

function estados() {
    if (search_bar.classList.contains('ativo')) {
        search()
    }

    if (int_item.classList.contains('ativo')) {
        int_item.classList.toggle('ativo');

    }
    if (cat_item.classList.contains('ativo')) {
        cat_item.classList.toggle('ativo');
    }

    estado.classList.toggle('ativo');

}

function mundo() {

    if (search_bar.classList.contains('ativo')) {
        search()
    }

    if (estado.classList.contains('ativo')) {
        estado.classList.toggle('ativo');

    }
    if (cat_item.classList.contains('ativo')) {
        cat_item.classList.toggle('ativo');
    }


    int_item.classList.toggle('ativo');

}

function tipos() {

    if (search_bar.classList.contains('ativo')) {
        search()
    }

    if (estado.classList.contains('ativo')) {
        estado.classList.toggle('ativo');

    }
    if (int_item.classList.contains('ativo')) {
        int_item.classList.toggle('ativo');
    }

    cat_item.classList.toggle('ativo');

}

function close(e) {
    if(e.target.parentNode.parentNode.id !== 'nav' && e.target.parentNode.parentNode.id !== 'nav-menu' && e.target.parentNode.parentNode.id !== 'brasil' && e.target.parentNode.parentNode.id !== 'mundo' && e.target.parentNode.parentNode.id !== 'tipos') {
        if (estado.classList.contains('ativo')) {
            estado.classList.remove('ativo');
        }

        if (int_item.classList.contains('ativo')) {
            int_item.classList.remove('ativo');
        }

        if (cat_item.classList.contains('ativo')) {
            tipos();
        }
    }
}

search_btn.addEventListener('click', search);

sticky_btn.addEventListener('click', sticky);

brasil_nav.addEventListener('click', estados);

int_nav.addEventListener('click', mundo);

cat_nav.addEventListener('click', tipos);

document.body.addEventListener('click', close);