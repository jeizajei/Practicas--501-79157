const persona ={ 
    nombre: "Senku",
    apellido: "Ishigami",
    edad: 19,
    profesión: "Científico ",
    foto: "https://cdn.alfabetajuega.com/alfabetajuega/2023/10/senku-ishigami.jpg?width=1200",
    direccion: {
        calle: "Aldea Ishigami",
        ciudad: "Tokio"
    },
    hobbies: ["experimentar", "inventar", "aprender"]
};


const persona2 = {
    nombre: "Gen",
    apellido: "Asagiri",
    edad: 20,
    profesion: "Mentalista",
    foto: "https://cdn.alfabetajuega.com/alfabetajuega/2023/10/gen-asagiri.jpg?width=1200",
    direccion: {
        calle: "Aldea Ishigami",
        ciudad: "Tokio"
    },
    hobbies: ["psicología", "trucos", " tomar refrescos"]
};

const persona3 = {
    nombre: "Ryusui",
    apellido: "Nanami",
    edad: 20,
    profesion: "Navegante / Empresario",
    foto: "https://cdn.alfabetajuega.com/alfabetajuega/2023/10/ryusui-nanami.jpg?width=1200",
    direccion: {
        calle: "Base del Imperio de la Ciencia",
        ciudad: "Tokio",
    },
    hobbies: ["navegar", "ganar dinero", "aventura"]
};

const persona4 = {
    nombre: "Tsukasa",
    apellido: "Shishio",
    edad: 19,
    profesion: "Guerrero / Líder",
    foto: "https://cdn.alfabetajuega.com/alfabetajuega/2023/10/tsukasa-shishio.jpg?width=1200",
    direccion: {
        calle: "Bosques cercanos a Tokio",
        ciudad: "Tokio",
    },
    hobbies: ["cazar", "proteger a los débiles", "entrenar"]
};

const persona5 = {
    nombre: "Suika",
    apellido: "",
    edad: 16,
    profesion: "Investigadora",
    foto: "https://cdn.alfabetajuega.com/alfabetajuega/2023/10/suika.jpg?width=1200",
    direccion: {
        calle: "Aldea Ishigami",
        ciudad: "Tokio",
    },
    hobbies: ["ayudar", "observar", "jugar"]
};

const persona6 = {
    nombre: "Kohaku",
    apellido: "",
    edad: 19,
    profesion: "Guerrera",
    foto: "https://cdn.alfabetajuega.com/alfabetajuega/2023/10/kohaku.jpg?width=1200",
    direccion: {
        calle: "Aldea Ishigami",
        ciudad: "Tokio",
    },
    hobbies: ["entrenar", "explorar", "cuidar de Ruri"]
};

document.getElementById("foto").src = persona.foto;
document.getElementById("nombre").innerHTML = persona.nombre + " " + persona.apellido;
document.getElementById("edad").innerHTML = persona.edad + " años";
document.getElementById("profesion").innerHTML = persona.profesion;
document.getElementById("direccion").innerHTML = persona.direccion.calle + ", " + persona.direccion.ciudad;

let hobbies = document.getElementById("hobbies");
persona.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.innerHTML = hobby;
    hobbies.appendChild(li);
});

document.getElementById("foto2").src = persona2.foto;
document.getElementById("nombre2").innerHTML = persona2.nombre + " " + persona2.apellido;
document.getElementById("edad2").innerHTML = persona2.edad + " años";
document.getElementById("profesion2").innerHTML = persona2.profesion;
document.getElementById("direccion2").innerHTML = persona2.direccion.calle + ", " + persona2.direccion.ciudad;

let hobbies2 = document.getElementById("hobbies2");
persona2.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.innerHTML = hobby;
    hobbies2.appendChild(li);
});


document.getElementById("foto3").src = persona3.foto;
document.getElementById("nombre3").innerHTML = persona3.nombre + " " + persona3.apellido;
document.getElementById("edad3").innerHTML = persona3.edad + " años";
document.getElementById("profesion3").innerHTML = persona3.profesion;
document.getElementById("direccion3").innerHTML = persona3.direccion.calle + ", " + persona3.direccion.ciudad;

let hobbies3 = document.getElementById("hobbies3");
persona3.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.innerHTML = hobby;
    hobbies3.appendChild(li);
});


document.getElementById("foto4").src = persona4.foto;
document.getElementById("nombre4").innerHTML = persona4.nombre + " " + persona4.apellido;
document.getElementById("edad4").innerHTML = persona4.edad + " años";
document.getElementById("profesion4").innerHTML = persona4.profesion;
document.getElementById("direccion4").innerHTML = persona4.direccion.calle + ", " + persona4.direccion.ciudad;

let hobbies4 = document.getElementById("hobbies4");
persona4.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.innerHTML = hobby;
    hobbies4.appendChild(li);
});


document.getElementById("foto5").src = persona5.foto;
document.getElementById("nombre5").innerHTML = persona5.nombre + " " + persona5.apellido;
document.getElementById("edad5").innerHTML = persona5.edad + " años";
document.getElementById("profesion5").innerHTML = persona5.profesion;
document.getElementById("direccion5").innerHTML = persona5.direccion.calle + ", " + persona5.direccion.ciudad ;

let hobbies5 = document.getElementById("hobbies5");
persona5.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.innerHTML = hobby;
    hobbies5.appendChild(li);
});


document.getElementById("foto6").src = persona6.foto;
document.getElementById("nombre6").innerHTML = persona6.nombre + " " + persona6.apellido;
document.getElementById("edad6").innerHTML = persona6.edad + " años";
document.getElementById("profesion6").innerHTML = persona6.profesion;
document.getElementById("direccion6").innerHTML = persona6.direccion.calle + ", " + persona6.direccion.ciudad;

let hobbies6 = document.getElementById("hobbies6");
persona6.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.innerHTML = hobby;
    hobbies6.appendChild(li);
});
