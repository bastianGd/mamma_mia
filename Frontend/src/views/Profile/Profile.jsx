import CustomButton from '../../components/Buttons/CustomButton';
import './profile.css';

const Profile = ({ name = "Bastián", email = "bastian@correo.cl", avatar }) => {
    return (
        <div className="card-profile mt-5">
            <img
                src={"https://www.w3schools.com/howto/img_avatar.png"}
                alt={`${name}'s avatar`}
                className="card-avatar"
            />
            <div className="profile-container">
                <h4><b>{name}</b></h4>
                <p>{email}</p>
            </div>
            <CustomButton 
            className='m-5'
                color='danger'
                label={'Cerrar sesión 🔐'} />
        </div>
    );
};

export default Profile;
