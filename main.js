function criarElem(tag, atrib) {
    let elem = document.createElement(tag);
    if (atrib != [[]]) {
        for (j = 0; j < atrib.length; j++) {
            elem.setAttribute(atrib[j][0], atrib[j][1]);
        }
    }
    return elem;
}

console.log(alunos)

const lista = document.getElementById('lista');

for (i = 0; i < alunos.length; i++) {
    const p = criarElem('p', [[]]);
    const a = criarElem('a',[["href","./"+alunos[i].pasta]]);
    const div = criarElem('div',[["class","aluno"]]);
    const li = criarElem('li',[[]]);

    p.appendChild(document.createTextNode(alunos[i].nome));

    a.appendChild(p);
    div.appendChild(a);
    li.appendChild(div);
    lista.appendChild(li);
}