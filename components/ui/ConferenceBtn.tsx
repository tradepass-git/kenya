
import styles from "@/public/css/ViewMoreBtn.module.css";
type ConferenceBtnProps = {
    Text?: string;
    Link?: string;
    TextColor?: string;
    BgColor?: string;
    ctaId?: string;
    hubspotId?: string;
};

const ConferenceBtn = ({ Text, Link, TextColor, BgColor, ctaId, hubspotId }: ConferenceBtnProps) => {
    return (
        <a href={Link} onClick={(e) => e.preventDefault()} id={ctaId} data-bs-target="#hubspotModal" data-modal-title={Text} data-form-id={hubspotId} className={styles.conference_btn}>
            <div className={`${styles.icon} ${styles.first}`}>
                <div style={{ backgroundColor: BgColor }} className={`${styles["icon-fill"]}`}></div>
                <div style={{ color: TextColor }} className={`${styles["icon-content"]}`}>
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.79355 2L15.7175 7.92396M15.7175 7.92396L9.79355 13.8479M15.7175 7.92396H1.5"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                    </svg>
                </div>
            </div>
            <div className={styles["btn-content"]}>
                <div style={{ backgroundColor: BgColor }} className={`${styles["btn-fill"]}`}></div>
                <div style={{ color: TextColor }} className={`${styles["btn-text"]}`}>
                    <span>{Text}</span>
                </div>
            </div>
            <div className={`${styles.icon} ${styles.second}`}>
                <div style={{ backgroundColor: BgColor }} className={`${styles["icon-fill"]}`}></div>
                <div style={{ color: TextColor }} className={`${styles["icon-content"]}`}>
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.79355 2L15.7175 7.92396M15.7175 7.92396L9.79355 13.8479M15.7175 7.92396H1.5"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                    </svg>
                </div>
            </div>
        </a>
    );
};

export default ConferenceBtn;