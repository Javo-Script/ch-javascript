/*-----------------------------------------
                   DATA
  ---------------------------------------*/

  var services = [{
    "id":"01",
    "title":"Diseño de logo",
    "description":"Descripción del trabajo y su alcance.",
    "category":"branding",
    "price": 18000,
    "imgBanner":"https://www.fillmurray.com/g/1200/675",
    "imgCard":"https://www.fillmurray.com/g/300/300",
    "imgThumb":"https://www.fillmurray.com/g/80/80",
    "pageUrl":"#"
  },{
    "id":"02",
    "title":"Diseño de logo y manual de marca",
    "description":"Descripción del trabajo y su alcance.",
    "category":"branding",
    "price": 25000,
    "imgBanner":"https://www.fillmurray.com/g/1200/675",
    "imgCard":"https://www.fillmurray.com/g/300/300",
    "imgThumb":"https://www.fillmurray.com/g/80/80",
    "pageUrl":"#"
  },{
    "id":"03",
    "title":"Rediseño de logo",
    "description":"Descripción del trabajo y su alcance.",
    "category":"branding",
    "price": 13000,
    "imgBanner":"https://www.fillmurray.com/g/1200/675",
    "imgCard":"https://www.fillmurray.com/g/300/300",
    "imgThumb":"https://www.fillmurray.com/g/80/80",
    "pageUrl":"#"
  },{
    "id":"04",
    "title":"Landing page",
    "description":"Descripción del trabajo y su alcance.",
    "category":"development",
    "price": 18000,
    "imgBanner":"https://www.fillmurray.com/g/1200/675",
    "imgCard":"https://www.fillmurray.com/g/300/300",
    "imgThumb":"https://www.fillmurray.com/g/80/80",
    "pageUrl":"#"
  },{
    "id":"05",
    "title":"Sitio en WordPress",
    "description":"Descripción del trabajo y su alcance.",
    "category":"development",
    "price": 35000,
    "imgBanner":"https://www.fillmurray.com/g/1200/675",
    "imgCard":"https://www.fillmurray.com/g/300/300",
    "imgThumb":"https://www.fillmurray.com/g/80/80",
    "pageUrl":"#"
  },{
    "id":"06",
    "title":"Sitio web (HTML, CSS)",
    "description":"Descripción del trabajo y su alcance.",
    "category":"development",
    "price": 28000,
    "imgBanner":"https://www.fillmurray.com/g/1200/675",
    "imgCard":"https://www.fillmurray.com/g/300/300",
    "imgThumb":"https://www.fillmurray.com/g/80/80",
    "pageUrl":"#"
  }];
  
  var members = [{
    "user":"Admin",
    "password":"asdw1234"
  },{
    "user":"Admin2",
    "password":"abcd1234"
  }];

  var filtrado = (id) => {
    productos.filter(product.category == id)
  }