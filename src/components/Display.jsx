import styles from './Display.module.css';

const Display = ({text}) => {
    return <div className="row">
        <div className='col'>
            <input className={styles.display} type="text" value={text} readOnly></input>
        </div>
    </div>
    

}

export default Display;