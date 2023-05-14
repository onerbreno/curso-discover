import React, { useState, useEffect } from 'react';
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


    // a convenção é desestruturar
    const [studentName, setStudentName] = useState('');
    const [students, setStudent] = useState([])
    const [user, setUser] = useState({ name: '', avatar: '' })

    function handleAddStudent() {
        const newStudent = {
            name: studentName,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })
        }
        // prevState representa o estado anterior
        // garante que o estado anterior seja preservado
        setStudent(prevState => [...prevState, newStudent])
        // ótimo exemplo de imutabilidade
    }

    // usando useEffect para fazer uma requisição a uma API
    useEffect(() => { // não é possível usar async diretamente no useEffect() 
        // mas é possível utilizar funções assíncronas dentro dele

        async function fetchData() { // a declaração da função poderia ser fora do useEffect
            // por convenção, como essa função está relacionada ao useEffect ela pode ser declarada por aqui
            const response = await fetch('https://api.github.com/users/onerbreno')
            const data = await response.json()
            console.log("DADOS ==> ", data)
            setUser({
                name: data.name,
                avatar: data.avatar_url
            })
        }
        
        fetchData() 

        // fetch('https://api.github.com/users/onerbreno')
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         setUser({
        //             name: data.name,
        //             avatar: data.avatar_url
        //         })
        //     })

    }, [])
    // useUffect() é executado após a página ser renderizada ou após os elementos passados como 
    // segundo argumento para a função serem atualizados

    return (
        // <> elemento chamado fragment, dentro do return o conteúdo deve estar embrulhado
        <div className='container'>

            <header>
                <h1>Lista de presença</h1>
                <div>
                    <strong>
                        {user.name}
                    </strong>
                    <img src={user.avatar} alt="Foto de perfil" />
                </div>
            </header>

            <input
                type="text"
                placeholder="Digite o nome..."
                // em react os eventos são nomeados usando camelCase
                onChange={e => setStudentName(e.target.value)}
            />

            <button type="button" onClick={handleAddStudent}>
                Adicionar
            </button>

            {/* passando props para os componentes */}
            {/* <Card name="Rodrigo" time="10:55:25" idade={18} /> */}

            {
                students.map(student => (
                    <Card
                        // numa lista, o react recomenda que os elementos renderizados tenham keys
                        // para identificar de forma eficiente cada elemento da lista e 
                        // otimizar a renderização.
                        key={student.time}
                        name={student.name}
                        time={student.time}
                    />)
                )
            }
        </div>
        // </>
    )
}

// export default Home
