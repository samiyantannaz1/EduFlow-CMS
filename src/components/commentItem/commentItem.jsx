import styles from './commentItem.module.css'
export default function CommentItem({id,body,email,name}){

    return(
        <>
        <div className={styles.parent}>
            <div className={styles.container}>
            <b>کامت شماره:{id}</b>
            <p>{body}</p>
            <div className={styles.footer}>
             <p>{email}</p>
             <p>{name}</p>
            </div>
        </div>
        </div>
        </>
    )
}