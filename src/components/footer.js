import '../css/main.css';
import { FaInstagram } from 'react-icons/fa';
import { ImFacebook, ImPinterest, ImTwitter} from 'react-icons/im';

function Footer(props) {
  return (
    <footer style={{background: props.bgcolor}}>
        <div className="footer-conatiner">
          <div className='footer-copyright' style={{color: props.txtcolor}}>Copyright ©2023 all rights reserved to NMD </div>
          <div className='footer-credit'><p style={{color: props.txtcolor}}>Designed and Developed by Conversant</p></div>
          <div className='footer-social'>
            <ul>
              <a href='https://m.facebook.com/318475758243171/'><li style={{color: props.txtcolor}}><ImFacebook/></li></a>
              <a href='https://instagram.com/nmd.interiors?igshid=NTc4MTIwNjQ2YQ=='><li style={{color: props.txtcolor}}><FaInstagram /></li></a>
              <a href='https://twitter.com/NmdInteriors?t=WmCzMo-fUpzapFxMhxz4zQ&s=09'><li style={{color: props.txtcolor}}><ImTwitter/></li></a>
              <a href='https://pin.it/4ct6SB6'><li style={{color: props.txtcolor}}><ImPinterest/></li></a>
            </ul>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
