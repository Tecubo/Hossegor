class Category {
    constructor(title, len) {
        this.title = title
        this.len = len
    }
}

const galery_elm = document.getElementById('galery')

let galery = [
    new Category('voyage', 6),
    new Category('maison', 77),
    new Category('plage', 15),
    new Category('soiree', 56),
    new Category('groupe', 21),
    new Category('paysage', 12),
]


for (let i = 0; i < galery.length; i++) {
    let cat = galery[i]
    
    let cat_elm = document.createElement('div')
    cat_elm.setAttribute('class', 'category')
    cat_elm.setAttribute('id', cat.title)
    galery_elm.appendChild(cat_elm)

    let title_elm = document.createElement('h2')
    title_elm.innerText = cat.title.charAt(0).toUpperCase() + cat.title.slice(1)
    title_elm.setAttribute('class', 'category-title')
    cat_elm.appendChild(title_elm)

    let photos_elm = document.createElement('div')
    photos_elm.setAttribute('class', 'photos')
    cat_elm.appendChild(photos_elm)

    for (let k = 1; k <= cat.len; k++) {
        let photoTitle = cat.title + String(k)
        let photoPath = 'img/galerie/' + cat.title + '/' + photoTitle + '.jpg'

        let photoContainer = document.createElement('a')
        photoContainer.setAttribute('href', photoPath)
        photoContainer.setAttribute('data-lightbox', cat.title)
        photoContainer.setAttribute('data-title', photoTitle)
        photos_elm.appendChild(photoContainer)

        let photo = document.createElement('div')
        photo.setAttribute('id', photoTitle)
        photo.style.background = 'url("' + photoPath + '") center center / cover no-repeat'
        photoContainer.appendChild(photo)
    }
}

lightbox.option({
    'fadeDuration': 200,
    'imageFadeDuration': 200,
    'resizeDuration': 300
})