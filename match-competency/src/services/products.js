const url = 'https://practiceapi.devmountain.com/products';

export function getAll() {
    return fetch(url)
    .then( res => res.json() );
}

export function getOne(id) {
    return fetch(`${url}/${id}`)
    .then(res => res.json() );
}