import '../css/career.css';
import ContentImg2 from '../assets/img/img2.jpg'
import SmoothScroll from '../components/smoothScroll';


function Career() {

    return (
        <>
        <SmoothScroll>
            <section className='career-container'>
                <div className='career-flex'>
                    <div className='career-title-container'>
                        <p>Career</p>
                        <h2>Love Interior?</h2>
                        <h2>You`ll fit right in.</h2>
   

                        <div className='career-position'>
                            <span>I`m interested in</span>
                            <select className='selected'>
                                <option>Select</option>
                                <option>3D designer</option>
                                <option>Sketcher</option>
                                <option>Interior design</option>
                            </select>
                        </div>

                        <div className='career-available-positions'>
                            <h4>Available positions</h4>
                            <div>
                                <hr/>
                                
                                <h3>3D Designer</h3>
                                <h5>Description</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dolor id magna feugiat, eu imperdiet lorem pretium. Mauris sit amet lorem quis est eleifend ornare. Donec porta ex ipsum, sed egestas sapien viverra ut. Integer nec lacus metus. Nam rutrum leo ut turpis blandit ultricies. Suspendisse rutrum nisl vel nulla sodales, sed sodales massa molestie. Pellentesque accumsan nec urna tincidunt auctor.</p>
                                <br/>
                                
                            </div>
                        
                            <div>
                                <hr/>
                                <h3>3D Designer</h3>
                                <h5>Description</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur dolor id magna feugiat, eu imperdiet lorem pretium. Mauris sit amet lorem quis est eleifend ornare. Donec porta ex ipsum, sed egestas sapien viverra ut. Integer nec lacus metus. Nam rutrum leo ut turpis blandit ultricies. Suspendisse rutrum nisl vel nulla sodales, sed sodales massa molestie. Pellentesque accumsan nec urna tincidunt auctor.</p>
                                
                            </div>
                        </div>

                        <div className='career-form-container'>
                <h2>Join us</h2> 
                <br/>
                    <form>
                        <div className='form-container'>
                            <div className='form-container-block'>
                                <div>
                                    <input placeholder='Name*' className='input' />
                                    <span className='underline'></span>
                                </div>
                                <div>
                                    <input placeholder='Email*' />
                                </div>
                                <div>
                                    <input placeholder='Location*' />
                                </div>
                            </div>
                            <div className='form-container-block1'>
                                <div>
                                    <input placeholder='career Number*' />
                                </div>
                                <div>
                                    <input placeholder='Type*' />
                                </div>
                                <div>
                                    <input placeholder='Budget*' />
                                </div>
                            </div>
                            <div className='form-container-textarea'>
                                <div>
                                    <input placeholder='Write your message here' />
                                </div>
                                <div>
                                    <button>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                    </div>
                <div className='career-bg-img'>
                    <img src={ContentImg2} alt="" />
                </div>
                </div>
                

            </section>
            </SmoothScroll>

        </>
    );
}

export default Career;
