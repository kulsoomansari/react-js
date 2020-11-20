import Logo from './image/hy.jpg';
function Header(){
    return(
        <>
        <div>
        <img src={Logo} alt='' width='200px' />
        </div>
        <div>heading</div>
        <div>links</div>
       </>
    );
}
export default Header;