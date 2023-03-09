import style from './style.module.css';
import React from 'react';

const StepsMenu = (props) => {
    const display = props.display;
    const steps = [
        {
            stepNumber: 1,
            stepText: 'your info'
        },
        {
            stepNumber: 2,
            stepText: 'select plan'
        },
        {
            stepNumber: 3,
            stepText: 'add-ons'
        },
        {
            stepNumber: 4,
            stepText: 'summary'
        }
    ];

    return (
        <div className={style.stepsMenu}>
            <ul>
                {steps.map((step) => {
                    return (
                        <li key={step.stepNumber}>
                            <button>{step.stepNumber}</button>
                            <div className={style.stepsDescription}>
                                <p>STEP {step.stepNumber}</p>
                                <h3>{step.stepText}</h3>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <img alt='fundo colorido' src={`../../../assets/images/bg-sidebar-${display}.svg`}></img>
        </div>
    );
};

export default StepsMenu;
