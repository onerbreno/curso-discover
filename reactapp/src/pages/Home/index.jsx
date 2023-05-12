import './styles.css';

import { Card } from '../../components/Card';

export function Home() {
    return (
        // <>
        <div className='container'>
            <h1>Lista de presença</h1>
            <input type="text" placeholder="Digite o nome..." />
            <button type="button">Adicionar</button>

            {/* passando props para os componentes */}
            <Card name="Rodrigo" time="10:55:25" idade={18}/>
            <Card name="João" time="11:00:10"/>
            <Card name="Ana" time="12:11:55"/>
        </div>
        // </>
    )
}

// export default Home
