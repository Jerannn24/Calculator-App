'use client';
import React, { useState } from 'react';

const Calculator = () => {
    const [result, setResult] = useState('');

    const inputHandle = (value) => {
        if (value === '=') {
            try {
                setResult(eval(result) || '');
            } catch (error) {
                setResult('ERROR');
            }
        } else if (value === 'C') {
            setResult('');
        } else if (value === 'CE') {
            setResult(result.slice(0, -1));
        } else {
            setResult(result + value);
        }
    }

    return (
        <>
            <h2>CALCULATOR APP</h2>
            <div className='calculator'>
                <input className="form-control mb-3" type='text' value={result} readOnly></input>
                <div className='button'>
                    <button onClick={() => inputHandle('7')}>7</button>
                    <button onClick={() => inputHandle('8')}>8</button>
                    <button onClick={() => inputHandle('9')}>9</button>
                    <button className='operator' onClick={() => inputHandle('CE')}>CE</button>

                    <button onClick={() => inputHandle('4')}>4</button>
                    <button onClick={() => inputHandle('5')}>5</button>
                    <button onClick={() => inputHandle('6')}>6</button>
                    <button className='operator' onClick={() => inputHandle('/')}>/</button>

                    <button onClick={() => inputHandle('1')}>1</button>
                    <button onClick={() => inputHandle('2')}>2</button>
                    <button onClick={() => inputHandle('3')}>3</button>
                    <button className='operator' onClick={() => inputHandle('*')}>*</button>

                    <button onClick={() => inputHandle('0')}>0</button>
                    <button onClick={() => inputHandle('.')}>.</button>
                    <button onClick={() => inputHandle('00')}>00</button>
                    <button className='operator' onClick={() => inputHandle('-')}>-</button>

                    <button className='operator wide' id='clear' onClick={() => inputHandle('C')}>C</button>
                    <button className='operator' onClick={() => inputHandle('=')}>=</button>
                    <button className='operator' onClick={() => inputHandle('+')}>+</button>
                </div>
            </div>
        </>
    )
}

export default Calculator