import Footer from './footer'
import Header from './header'




export default function Index(){
   return (
     <div>
<div>
      <Header 
        h1Text="Clean Blog" 

        backgroundImage='https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/src/assets/img/home-bg.jpg?raw=true'
        subheadingText="A Blog Theme by Start Bootstrap"
      />
      
    </div>
<div className='main-content'>
<div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                   
                    <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">Man must explore, and this is exploration at its greatest</h2>
                            <h3 className="post-subtitle">Problems look mighty small from 150 miles up</h3>
                        </a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on September 24, 2023
                        </p>
                    </div>
                   
                    <hr className="my-4" />
                    
                    <div className="post-preview">
                        <a href="post.html"><h2 className="post-title">I believe every human has a finite number of heartbeats. I dont intend to waste any of mine.</h2></a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on September 18, 2023
                        </p>
                    </div>
                   
                    <hr className="my-4" />
                 
                    <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">Science has not yet mastered prophecy</h2>
                            <h3 className="post-subtitle">We predict too much for the next year and yet far too little for the next ten.</h3>
                        </a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on August 24, 2023
                        </p>
                    </div>
                    
                    <hr className="my-4" />
                   
                    <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">Failure is not an option</h2>
                            <h3 className="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
                        </a>
                        <p className="post-meta">
                            Posted by
                            <a href="#!">Start Bootstrap</a>
                            on July 8, 2023
                        </p>
                    </div>
                   
                   
                    <hr className="my-4" />
                  
                  
                    <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                </div>
            </div>
        </div>

</div>

<div className='footer'>
    <Footer />
</div>

     </div>

   )
}