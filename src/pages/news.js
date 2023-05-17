import '../css/news.css';
// import { useLayoutEffect, useRef } from 'react'
import TalkUs from '../components/talkus';
import Footer from '../components/footer';
import SmoothScroll from '../components/smoothScroll';
import Image from '../components/images';


function News() {



  return (
    <>
      <SmoothScroll>
        <div id="smooth-wrapper">
          <div id="smooth-content">
          <section className='work-title-container'>
            <div>
              <h2><span> News & Media </span></h2>
            </div>
            <div>
              <div className="about-right-img-Head" >
                <img style={{ borderRadius: "50px", height: "70vh", marginLeft: "28%" }} src="/projects/nmd/static/media/img2.814a8b32693b6489ba67.jpg" alt="mv" />
              </div>
            </div>
          </section>

            <section className='news-box-wrapper'>
              <div className='news-box-container'>
                <div>
                  <div className='img-con'>
                    <img src={Image.image2} alt="" className='img_1' />
                    <img src={Image.image3} alt="" className='img_2' />
                    <img src={Image.image1} alt="" className='img_3' /></div>

                  <div className='p-con'>
                    <h1>Some news Title</h1>
                    <p>---------- (Business)</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor accumsan nec urna tincidunt auctor.</p>              </div>
                </div>
              </div>
              <div className='news-box-container'>
                <div>
                  <div className='img-con'>
                    <img src={Image.image4} alt="" className='img_1' />
                    <img src={Image.image5} alt="" className='img_2' />
                    <img src={Image.image1} alt="" className='img_3' /></div>

                  <div className='p-con'>
                    <h1>Some news Title</h1>
                    <p>---------- (Business)</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor accumsan nec urna tincidunt auctor.</p>              </div>
                </div>
              </div>
              <div className='news-box-container'>
                <div>
                  <div className='img-con'>
                    <img src={Image.image2} alt="" className='img_1' />
                    <img src={Image.image3} alt="" className='img_2' />
                    <img src={Image.image1} alt="" className='img_3' /></div>

                  <div className='p-con'>
                    <h1>Some news Title</h1>
                    <p>---------- (Business)</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor accumsan nec urna tincidunt auctor.</p>              </div>
                </div>
              </div>
              <div className='news-box-container'>
                <div>
                  <div className='img-con'>
                    <img src={Image.image5} alt="" className='img_1' />
                    <img src={Image.image1} alt="" className='img_2' />
                    <img src={Image.image2} alt="" className='img_3' /></div>

                  <div className='p-con'>
                    <h1>Some news Title</h1>
                    <p>---------- (Business)</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor accumsan nec urna tincidunt auctor.</p>              </div>
                </div>
              </div><div className='news-box-container'>
                <div>
                  <div className='img-con'>
                    <img src={Image.image1} alt="" className='img_1' />
                    <img src={Image.image4} alt="" className='img_2' />
                    <img src={Image.image5} alt="" className='img_3' /></div>

                  <div className='p-con'>
                    <h1>Some news Title</h1>
                    <p>---------- (Business)</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctorLorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan nec urna tincidunt auctor accumsan nec urna tincidunt auctor.</p>              </div>
                </div>
              </div>
            </section>

            <TalkUs txtcolor="#fff" />
            <Footer txtcolor="#fff" />
          </div>
        </div>
      </SmoothScroll>
    </>
  );
}

export default News;
