export const products = [
 

    {
      id: 1,
      img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
      title: "Remera teen",
      desc: "Remera algodon blanca Life is good",
      price: 1999,
      stock: 10,
      category:"niño",
     
    },
    {
      id: 2,
      img: "https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
      title: "Remera seventies",
      desc: "Remera algodon indie",
      price: 2500,
      stock: 10,
      category:"hombre",
    
    },
    {
      id: 3,
      img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
      title: "Hawaian",
      desc: "Camisa hawaina",
      price: 2800,
      stock: 10,
      category:"hombre",
    
    },
    {
      id: 4,
      img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
      title: "Vestido Summer",
      desc: "Solero estampado",
      price: 3000,
      stock: 10,
      category:"mujer",
     
    },
    {
      id: 5,
      img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
      title: "Teen Bag",
      desc: "Cartera simil cuero estampada",
      price: 3600,
      stock: 10,
      category:"mujer",
   
    },
    {
      id: 6,
      img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
      title: "Gorra Rocket Vintage",
      desc: "Gorra vintage gabardina",
      price: 1750,
      stock: 10,
      category:"hombre",
      
    },
    {
      id: 7,
      img: "https://www.burdastyle.com/pub/media/catalog/product/cache/3c00e5b391c793f573cee3830858f98f/105/BUS-PAT-BURTE-1010718/1170x1470_BS_2018_07_101_back.jpg",
      title: "Mono estampado",
      desc: "Mono estampado de seda",
      price: 6700,
      stock: 10,
      category:"mujer",
      
    },
    {
      id: 8,
      img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
      title: "Piloto women",
      desc: "Piloto de lluvia gabardina. Todos los colores y talles",
      price: 8500,
      stock: 10,
      category:"mujer",
      
    },
  
  ];
  
  
  
  
  
  //Esta funcion es llamada por ItemListContainer para darle al usuario la lista completa de productos para comprar
  
  export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
      setTimeout( () => {
      category ? resolve(products.filter(prod => prod.category === category)) :resolve (products)
    }, 1000)
       
  })
  }
  
  
  
  export const getProductById = (id) => {
    return new Promise ( (resolve, reject) => {
    const product = products.find(prod => Number(prod.id) === Number(id))
  setTimeout ( () => resolve(product), 1000)
  })
  }
  
  
  
  export const getCategories = () => [
    {
      id: "hombre",
      desc: "hombre",
    },
    {
      id: "mujer",
      desc: "mujer",
    },
    {
      id:"niño",
      desc: "niño",
    },
  ];
  
  
  

  export const sliderItems = [
    {
      id: 1,
      img: "https://i.ibb.co/cXFnLLV/3.png",
      title: "SUMMER SALE",
      desc: "VESTIDO PRIMAVERA LOOK GORGEOUS!",
      bg: "f5fafd",
    },
    {
      id: 2,
      img: "https://i.ibb.co/DG69bQ4/2.png",
      title: "AUTUMN COLLECTION",
      desc: "VESTIDO PRET-A-PORTER SUMMER",
      bg: "fcf1ed",
    },
    {
      id: 3,
      img: "https://i.ibb.co/cXFnLLV/3.png",
      title: "LOUNGEWEAR LOVE",
      desc: "VESTIDO PRET-A-PORTER SPRING",
      bg: "fbf0f4",
    },
  ];
  
  