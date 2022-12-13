import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0a2255f3d250ea3862d864d5582f1edc~c5_300x300.webp?x-expires=1671008400&x-signature=yYT3urBGEfx%2Bx6XykyAUrlbDZvc%3D"
                alt="tiktok"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyenvanb</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvanb</span>
            </div>
        </div>
    );
}

export default AccountItem;
