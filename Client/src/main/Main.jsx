import styles from './Main.module.css'

export function Main() {
    return (
        <div>
            <div className={styles.headerMain}>
                <div className={styles.tasksCreate}>
                    <p>Tarefas criadas</p>
                    <span>5</span>
                </div>
                <div className={styles.tasksComplete}>
                    <p>Concluidas</p>
                    <span>2 de 5</span>
                </div>
            </div>
        </div>
    )
}