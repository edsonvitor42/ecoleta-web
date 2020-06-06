import React, { useState } from 'react';

interface HeaderProps {
    title?: string
}

// Todo componente deve ter a primeira letra em maiúsculo.
const Header: React.FC<HeaderProps> = (props) => {
    let [counter, setCounter] = useState(0); // [valor do estado, função para atualizar o valor do estado].

    function handleButtonClick() {
      setCounter(counter + 1);
    };

    return (
        <header>
            <h1>{props.title || 'Ecoleta'}</h1>
            <button type="button" onClick={handleButtonClick}>Aumentar</button>
        </header>
    )
}

export default Header;