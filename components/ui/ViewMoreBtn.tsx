
import styles from "@/public/css/ViewMoreBtn.module.css";
type ViewMoreBtnProps = {
    Text: string;
    Link: string;
};

const ViewMoreBtn = ({ Text, Link }: ViewMoreBtnProps) => {
    return (
        <a href={Link} className={styles.conference_btn}>
            <div className={`${styles.icon} ${styles.first}`}>
                <div className={`${styles["icon-fill"]} ${styles["text-purple"]}`}></div>
                <div className={`${styles["icon-content"]} ${styles["text-white"]}`}>
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.79355 2L15.7175 7.92396M15.7175 7.92396L9.79355 13.8479M15.7175 7.92396H1.5"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                    </svg>
                </div>
            </div>
            <div className={styles["btn-content"]}>
                <div className={`${styles["btn-fill"]} ${styles["text-purple"]}`}></div>
                <div className={`${styles["btn-text"]} ${styles["text-white"]}`}>
                    <span>{Text}</span>
                </div>
            </div>
            <div className={`${styles.icon} ${styles.second}`}>
                <div className={`${styles["icon-fill"]} ${styles["text-purple"]}`}></div>
                <div className={`${styles["icon-content"]} ${styles["text-white"]}`}>
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.79355 2L15.7175 7.92396M15.7175 7.92396L9.79355 13.8479M15.7175 7.92396H1.5"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                    </svg>
                </div>
            </div>
        </a>
    );
};

export default ViewMoreBtn;