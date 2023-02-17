import { PlusCircle } from 'phosphor-react'
import logoToDo from '../assets/Logo.svg'

import styles from './Header.module.css'

export function Header() {
    return (
        <>
            <div className={styles.header}>
                <img src={logoToDo} alt="" />
            </div>

            <div className={styles.addTask}>
                <div className={styles.input}>
                    <input type="text" placeholder='Adicione uma nova tarefa' />
                </div>
                <div className={styles.btn}>
                    <button type='submit'>Criar <PlusCircle size={30} weight="light" /></button>
                </div>
            </div>

        </>
    )
}