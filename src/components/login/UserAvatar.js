import defaultAvatar from '../../data/assets/img/avatar.jpeg';

const UserAvatar = () => {
    return (
            <img
                src={defaultAvatar}
                alt={'user'}
                style={{ width: '4rem', height: '4rem' }}
                className="img-thumbnail rounded-circle"
            />
    );
};

export default UserAvatar;
