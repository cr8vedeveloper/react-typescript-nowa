
  
  import React from "react";
  import Lightbox from "react-image-lightbox";
  import "react-image-lightbox/style.css";
  import img1 from '../../../assets/img/photos/1.jpg';
  import img2 from '../../../assets/img/photos/2.jpg';
  import img3 from '../../../assets/img/photos/3.jpg';
  import img4 from '../../../assets/img/photos/4.jpg';
  import img5 from '../../../assets/img/photos/5.jpg';
  import img6 from '../../../assets/img/photos/6.jpg';
  import img7 from '../../../assets/img/photos/7.jpg';
  import img8 from '../../../assets/img/photos/8.jpg';

  

  const images:any = [ img1, img2, img3, img4, img5, img6, img7, img8,];
    
  export class LightGallery extends React.Component<{}, {photoIndex:any, isOpen:any}> {
    constructor(props:any) {
      super(props);
  
      this.state = {
        photoIndex: 0,
        isOpen: false
      };
    }
    render() {
      const { photoIndex, isOpen } = this.state;
      return (
        <>
          <div className="col-xl-4 col-lg-4 col-sm-6">
             <div className="brick">
           <img src={require("../../../assets/img/photos/1.jpg")} alt='media1' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
           </div>
           </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
             <div className="brick">
          <img src={require("../../../assets/img/photos/2.jpg")} alt='media2' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
          </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
             <div className="brick">
          <img src={require("../../../assets/img/photos/3.jpg")} alt='media3' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
          </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
             <div className="brick">
           <img src={require("../../../assets/img/photos/4.jpg")} alt='media4' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
           </div>
           </div>
           <div className="col-xl-4 col-lg-4 col-sm-6">
             <div className="brick">
           <img src={require("../../../assets/img/photos/5.jpg")} alt='media5' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
           </div>
           </div>
           <div className="col-xl-4 col-lg-4 col-sm-6">
             <div className="brick">
           <img src={require("../../../assets/img/photos/6.jpg")} alt='media6' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
           </div>
           </div>
           <div className="col-xl-4 col-lg-4 col-sm-6">
             <div className="brick">
           <img src={require("../../../assets/img/photos/7.jpg")} alt='media7' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
           </div>
           </div>
           <div className="col-xl-4 col-lg-4 col-sm-6">
             <div className="brick">
           <img src={require("../../../assets/img/photos/8.jpg")} alt='media8' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
           </div>
           </div>
           <div className="col-xl-4 col-lg-4 col-sm-6">
             <div className="brick">
           <img src={require("../../../assets/img/photos/9.jpg")} alt='media9' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
           </div>
           </div>
           
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
              }
            />
          )}
        </>
      );
    }
  }

    


