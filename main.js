function fetchJSON() {
    fetch("./alunos.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((error) => {
            console.error("Unable to fetch data:", error);
            return [];
        })
}

function criarElem(tag,atrib){
    elem = document.createElement(tag);
    for(i = 0; i < atrib.length; i++){
        elem.setAttribute
    }
}


alunos = fetchJSON()
lista = document.getElementById('lista');

for (i = 0; i < alunos.length; i++){
}