import React, { useState } from 'react';
import './styles.css';

import { Card } from '../../components/Card';

export function Home() {
    // const teste = useState(''); 
    // useState('') "retorna um array" de duas posições, a primeira posição
    // se refere ao valor atual do estado, que na declaração é o valor inicial passado com argumento da função
    // e a segunda posição é uma função para atualizar o estado

    // dessa forma, poderia utilizar, ignorando convenções, sem desestruturação:
    /* <h1>Nome: {teste[0]}</h1> */
    // <input
        // onChange={e => teste[1](e.target.value)}
    // />

    const [studentName, setStudentName] = useState('');

    return (
        // <> elemento chamado fragment, dentro do return o conteúdo deve estar embrulhado
        <div className='container'>
            <h1>Nome: {studentName}</h1>
            <input
                type="text"
                placeholder="Digite o nome..."
                // em react os eventos são nomeados usando camelCase
                onChange={e => setStudentName(e.target.value)}
            />
            <button type="button">Adicionar</button>

            {/* passando props para os componentes */}
            <Card name="Rodrigo" time="10:55:25" idade={18} />
            <Card name="João" time="11:00:10" />
            <Card name="Ana" time="12:11:55" />
        </div>
        // </>
    )
}

// export default Home
