
  
  import React from "react";
  import Lightbox from "react-image-lightbox";
  import "react-image-lightbox/style.css";
  import { Link } from "react-router-dom";
  import img1 from '../../../assets/img/photos/1.jpg';
  import img2 from '../../../assets/img/photos/2.jpg';
  import img3 from '../../../assets/img/photos/3.jpg';
  import img4 from '../../../assets/img/photos/4.jpg';
  import img5 from '../../../assets/img/photos/5.jpg';
  import img6 from '../../../assets/img/photos/6.jpg';
  import img7 from '../../../assets/img/photos/7.jpg';
  import img8 from '../../../assets/img/photos/8.jpg';


  
  export const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          speed: 3000,
          autoplay: true
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 3000,
          autoplay: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          speed: 3000,
          autoplay: true
        }
      }
    ]

  };
  

  
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
          <li className="col-xl-3 col-md-4 col-sm-4">
             <Link to="#">
           <img src={require("../../../assets/img/photos/1.jpg")} alt='media1' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
           </Link>
           </li>
          <li className="col-xl-3 col-md-4 col-sm-4">
             <Link to="#">
          <img src={require("../../../assets/img/photos/2.jpg")} alt='media2' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
          </Link>
          </li>
          <li className="col-xl-3 col-md-4 col-sm-4">
             <Link to="#">
          <img src={require("../../../assets/img/photos/3.jpg")} alt='media3' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
          </Link>
          </li>
          <li className="col-xl-3 col-md-4 col-sm-4">
             <Link to="#">
           <img src={require("../../../assets/img/photos/4.jpg")} alt='media4' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
           </Link>
           </li>
           <li className="col-xl-3 col-md-4 col-sm-4">
             <Link to="#">
           <img src={require("../../../assets/img/photos/5.jpg")} alt='media5' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
           </Link>
           </li>
           <li className="col-xl-3 col-md-4 col-sm-4">
             <Link to="#">
           <img src={require("../../../assets/img/photos/6.jpg")} alt='media6' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
           </Link>
           </li>
           <li className="col-xl-3 col-md-4 col-sm-4">
             <Link to="#">
           <img src={require("../../../assets/img/photos/7.jpg")} alt='media7' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
           </Link>
           </li>
           <li className="col-xl-3 col-md-4 col-sm-4">
             <Link to="#">
           <img src={require("../../../assets/img/photos/8.jpg")} alt='media8' onClick={() => this.setState({ isOpen: true })} className="img-responsive br-5"/>
           </Link>
           </li>
           
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

    


