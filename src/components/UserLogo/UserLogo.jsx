const { WrapperUserLogo, UserPhoto, UserName } = require('./UserLogo.styled');

const UserLogo = () => {
    return (
        <WrapperUserLogo>
            <UserPhoto />
            <UserName>UserName</UserName>
        </WrapperUserLogo>
    );
};

export default UserLogo;
