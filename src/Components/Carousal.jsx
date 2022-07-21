import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image1.jpg?dpr=1.0&q=70&w=768" },
    { url: "https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image2.jpg?dpr=1.0&q=70&w=768" },
    { url: "https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image3.png?dpr=1.0&q=70&w=768" },
    { url: "https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image4.png?dpr=1.0&q=70&w=768" },
    { url: "https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image5.jpg?dpr=1.0&q=70&w=768" },
    { url: "https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image6.png?dpr=1.0&q=70&w=768" },
    { url: "https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image7.jpg?dpr=1.0&q=70&w=768"},

    { url: "https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image8.jpg?dpr=1.0&q=70&w=768" },
    { url: "https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image9.jpg?dpr=1.0&q=70&w=768" },
    { url: "https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image10.jpg?dpr=1.0&q=70&w=768" },
    { url: "https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image11.jpg?dpr=1.0&q=70&w=768" },
    { url: "https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image12.jpg?dpr=1.0&q=70&w=768"},
];

const Carousel  = () => {
  return (
    <div>
         <SimpleImageSlider
                width={"45%"}
                height={"50vh"}
                // marginLeft={"100px"}
                images={images}
                showBullets={true}
                showNavs={true}
                style={{ cursor: "pointer" , marginLeft:"14px" , marginTop:"20px"} }
                navSize={60}
                navMargin={20}
                border_Redias={"5px"}
                loop={true}
                autoPlay={true}
                autoPlayDelay={3.0}
                
                
            >
              <h1>abcdef</h1>
            </SimpleImageSlider>
    </div>
  )
}

export default Carousel