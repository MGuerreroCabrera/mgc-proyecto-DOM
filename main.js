// import './style.css';

// Declaro el array de vendedores
const SELLERS = ["John Travolta", "Julia Roberts", "Kim Kardasian", "Donal Trump", "Carles Puigdemont", "Joan Manuel Serrat"];

// Declaro el array de objetos que contendrá los diferentes productos
const PRODUCTS = [
    {
        imgSrc: "https://assets.probikeshop.fr/images/products2/183/170179/380x380-170179_15687222217253.jpg",
        name: "Casco O'Neil TRAILFINDER negro",
        price: 79,
        sellers: ["John Travolta", "Julia Roberts"]  
    },
    {
        imgSrc: "https://assets.probikeshop.fr/images/products2/163/134810/380x380-134810_14966530107943.jpg",
        name: "Casco Troy Lee Design A2 Negro",
        price: 129,
        sellers: ["Donal Trump", "Carles Puigdemont", "Kim Kardasian"]  
    },
    {
        imgSrc: "https://assets.probikeshop.fr/images/products2/69/175939/380x380-175939_15722708922652.jpg",
        name: "Casco Bell Super DH",
        price: 245,
        sellers: ["John Travolta", "Carles Puigdemont", "Joan Manuel Serrat"]  
    },
    {
        imgSrc: "https://assets.probikeshop.fr/images/products2/266/204467/380x380-204467_15967006674474.jpg",
        name: "Casco MTB Fly Racing",
        price: 630,
        sellers: ["Joan Manuel Serrat", "Julia Roberts"]  
    },
    {
        imgSrc: "https://assets.probikeshop.fr/images/products2/68/286357/380x380-286357_16455252054257.jpg",
        name: "Casco MTB Fox Rampage",
        price: 435,
        sellers: ["Julia Roberts", "Donal Trump"]  
    },
    {
        imgSrc: "https://assets.probikeshop.fr/images/products2/207/134216/380x380-134216_1484820182049.jpg",
        name: "Casco BlueGrass super Bold",
        price: 55,
        sellers: ["Carles Puigdemont", "Julia Roberts"]  
    },
    {
        imgSrc: "https://assets.probikeshop.fr/images/products2/68/200779/380x380-200779_16022390891902.jpg",
        name: "Casco MTB Fox DropFrame negro",
        price: 175,
        sellers: ["Kim Kardasian", "John Travolta"]  
    },
    {
        imgSrc: "https://assets.probikeshop.fr/images/products2/69/156124/380x380-156124_15414120606232.jpg",
        name: "Casco MTB Bell 3R negro",
        price: 230,
        sellers: ["Donal Trump", "Joan Manuel Serrat", "Julia Roberts"]  
    },
    {
        imgSrc: "https://assets.probikeshop.fr/images/products2/266/266851/380x380-266851_16334236649879.jpg",
        name: "Casco MTB Fly Racing RockStar",
        price: 325,
        sellers: ["Kim Kardasian"]  
    },
    {
        imgSrc: "https://assets.probikeshop.fr/images/products2/345/284411/380x380-284411_16449305248402.jpg",
        name: "Casco MTB POC Orange",
        price: 339,
        sellers: ["Carles Puigdemont"]  
    },
    {
        imgSrc: "https://assets.probikeshop.fr/images/products2/183/258897/380x380-258897_16303093142674.jpg",
        name: "Casco O'neil Black Carbon",
        price: 465,
        sellers: ["Joan Manuel Serrat", "John Travolta"]  
    },
    {
        imgSrc: "https://images.internetstores.de/1958503/02/2ed7a5/200272010-giro-insurgent-spherical-dirt-helmet-matte-white-ano-blue-hero[380x380].jpg?forceSize=true&forceAspectRatio=true&forceAlign=center",
        name: "Casco MTB Giro Insurent",
        price: 180,
        sellers: ["Julia Roberts"]  
    },
    {
        imgSrc: "https://images.internetstores.de/1526804/02/080a41/1526804/general/1526804_01[380x380].jpg?forceSize=true&forceAspectRatio=true&forceAlign=center",
        name: "Casco MTB Giro Manifest",
        price: 225,
        sellers: ["Kima Kardasian", "John Travolta"]  
    },
    {
        imgSrc: "https://assets.probikeshop.fr/images/products2/178/208773/380x380-208773_1614669667859.jpg",
        name: "Casco MTB Leat R99",
        price: 220,
        sellers: ["Joan Manuel Serrat"]  
    },
    {
        imgSrc: "https://assets.probikeshop.fr/images/products2/578/174509/380x380-174509_15723417885571.jpg",
        name: "Casco Kali Chakra Solo Blanco",
        price: 39,
        sellers: ["Kim Kardasian", "Julia Roberts", "Donal Trump"]  
    }
];

// Declaro variables con el valor de las capas donde se irán pintando los elementos
const sectionFilters = document.querySelector("#filters");
const sectionProducts = document.querySelector("#products");

// Declaro la variable SELLER para filtrar los productos por vendedor
let SELLER = "";
let PRICE = 0;

// Función que filtra los artículos por vendedor
const filter = (option) => {

    // Creo un array donde pondré los productos que contengan ese vendedor
    const productsFiltered = [];

    switch (option) {
        case "seller": 
            // Recorro el array de productos
            for (const product of PRODUCTS) {
                
                // Compruebo si el producto incluye al vendedor
                if(product.sellers.includes(SELLER)){
                    productsFiltered.push(product);
                }
                // Pinto los artículos que hayan cumplido la condición.
                printArticles(productsFiltered);

            }
            break;
        case "price":
            // Recorro el array de productos
            for (const product of PRODUCTS) {
                
                // Compruebo si el producto tiene precio menor al indicado en el input
                if(product.price <= PRICE){
                    productsFiltered.push(product);
                }
                // Pinto los artículos que hayan cumplido la condición.
                printArticles(productsFiltered);

            }
        break;

        default: // Ejecución por defecto. Buscaré teniendo en cuenta la combinación de los dos filtros
            // Recorro el array de productos
            for(const product of PRODUCTS){
                // Compruebo si el producto incluye al vendedor y el precio es menor al indicado en el input
                if(product.sellers.includes(SELLER) && product.price <= PRICE){
                    console.log("He entrado en la condición de doble filtro");
                    productsFiltered.push(product);
                }

                // Pinto los artículos que hayan cumplido la condición.
                printArticles(productsFiltered);
            }
            console.log("Dentro del default");
            break;
    }

    

}

// Función que crea el elemento HTML - select
const createSelect = (sellers) => {

    // Creo el label para el elemento select
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Filtrar por vendedor";

    // Creo elemento HTML - select
    let selectSellers = document.createElement("select");
    selectSellers.setAttribute("id", "vendedores");
    selectSellers.className = "filterSize";

    for (const seller of sellers) {
        const option = document.createElement("option");
        option.setAttribute("value", seller);
        option.textContent = seller;
        selectSellers.appendChild(option);
    }
    
    sectionFilters.appendChild(inputLabel);
    sectionFilters.appendChild(selectSellers);

    selectSellers.addEventListener("change", (event) => {
        // Asigno el valor "vendedor" a la variable SELECT
        SELLER = event.target.value;

        // Llamo a la función de filtrar
        filter("seller");
    });
}

// Función que crea el elemento HTML - input
const createImput = () => {
    // Precio
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Filtrar por precio";

    // Input
    const input = document.createElement("input");
    input.placeholder = "Introduce un precio";
    input.className = "filterSize";
    
    // Botón
    const button = document.createElement("button");
    button.textContent = "Buscar";
    button.className = "filterSize";

    // Inyecto los elementos creados en la capa filters
    sectionFilters.appendChild(inputLabel);
    sectionFilters.appendChild(input);
    sectionFilters.appendChild(button);

    // Añado escuchador de eventos al botón
    button.addEventListener("click", (event) => {

        // Asigno el valor "vendedor" a la variable SELECT
        PRICE = document.querySelector("input").value;
        // Llamo a la función de filtrar
        filter("price");

    });

}

// Función que crea el elemento HTML - input
const createCleanImput = () => {
    
    // Botón
    const button = document.createElement("button");
    button.textContent = "Limpiar filtros";
    button.className = "filterSize";

    // Inyecto los elementos creados en la capa filters
    sectionFilters.appendChild(button);

    button.addEventListener("click", () => {

        // Pinto los artículos sin filtrar
        printArticles(PRODUCTS)
        
        // Pongo a 0 el valor del imput
        document.querySelector("input").value = "";
    }
    );

}


// Función para crear el lemento H1 del listado de productos
// const createTitle = () => {

//     Creo el elmento H1
//     const productsTitle = document.createElement("h1");
//     productsTitle.textContent = "Riders MTB";

//     Añado el título al DOM
//     body.appendChild(productsTitle);
    
// }

// Función para crear la capa contenedora de productos
const createProductsDiv = () => {

    // Creo el elemento div
    const productsDiv = document.createElement("div");
    productsDiv.classList.add("flex-container");
    productsDiv.classList.add("productsContainer");

    // Inyecto el elemento div a la section productos
    sectionProducts.appendChild(productsDiv);

}

// Función que pinta los artículos en el div contenedor
const printArticles = (articles) => {

    // Vacío el contenido del contenedor
    let productsContainer = document.querySelector(".productsContainer");
    productsContainer.innerHTML = "";

    // Recorro el array de artículos
    for (const articulo of articles) {
        
        // Creo el elmento article
        const article = document.createElement("article");
        article.classList.add("flex-container");
        article.classList.add("article");

        // Creo el elemento imagen
        const img = document.createElement("img");
        img.src = articulo.imgSrc;
        img.alt = "casco mtb";
        img.className = "imgProduct";

        // Creo el elmento p para el nombre del artículo
        const name = document.createElement("p");
        name.textContent = articulo.name;

        // Creo el elemento p para el precio
        const price = document.createElement("p");
        price.className = "price";
        price.textContent = `${articulo.price} €`;

        // Inyecto los elementos del artículo en el article
        article.appendChild(img);
        article.appendChild(name);
        article.appendChild(price);

        // Inyecto el artículo en el div contenedor de productos
        productsContainer.appendChild(article);        
    }
}

// Pinto el elemento HTML - select en la capa filters
createSelect(SELLERS);

// Pinto el elemento HTML - input en la capsa filters
createImput();

// Pinto el elemento HTML - boton limpiar
createCleanImput();

// Pinto el elemento HTML - h1 en la capa products
// createTitle();

// Pinto el elemento HTML - div contenedor de productos en la capa sectionProducts
createProductsDiv();

// Pinto los artículos en el contenedor
printArticles(PRODUCTS);



