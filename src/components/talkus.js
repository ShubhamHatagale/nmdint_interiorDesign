import '../css/main.css';
import contact from '../pages/contact';

function TalkUs(props) {
    return (
      <>
         <section className='talk-us-section' style={{backgroundColor: props.bgcolor}}>
          <div className='talk-title-container'>
            <h2><span className='talk-title'>Talk   to  Us</span></h2>
            <a href={"contact"}><p className='talk-text-cur' style={{color: props.txtcolor}}>contact now</p></a>
          </div>
        </section>
      </>
    );
  }
  
  export default TalkUs;
  