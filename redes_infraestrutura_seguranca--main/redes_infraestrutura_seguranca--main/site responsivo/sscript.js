//vai inplementar algo que ainda nao tem 
function cripto() {
    //oque estiver no textarea entre parentes vai ser  transformar em get elemnet
    let text=document.getElementById('text').value
    //o tor baixa as informações por partes e junta tudo apos concluir 
    let split=text.split("")
    //depois de fatiados sera feita uma contagem de letras das partes
    let chars=split.length
    // declarar uma expressão
    const pre=['Z','E','T','T','A','P','O','L','A','R','z','e','t','t','a','p','o','l','a','r']
    //const pre com letras mausculas e menusculas separadas por aspas e virgula para dififcultar as achances de decodificação 
    let rslt = document.getElementById('resut')
    //vai direcionar o individuo para o que o site propociona 

    for (i = 0; i < chars; i++)
    //faz a contagem das letras iniciando do zero ate o i, apos a contagem ele faz a junção
 
       { let idnex = pre.inedexOF(split{i})

        if(index === -1)
        //faz a contagem do i ate o -1
        { split [i] = split [i] }
    //uniao da ponta a e b 
        else {
            split[i] = pos[index]
        }
        //pos index
        const toString = split.join('')
        //faz a junção de tudo e mostra o resultado 
        rslt.innerText = toString
}
   
   }
    
   
    


