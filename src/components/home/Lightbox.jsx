/* ==========================================
   UCA LIGHTBOX COMPONENT

   FINAL PRODUCTION VERSION

   PART 1 / 2

   Imports
   Component Setup
   State Handling
   Keyboard Control
   Image Preparation
========================================== */


import "./Lightbox.css";

import {
  useEffect,
  useState
} from "react";





function Lightbox({

  images = [],

  activeIndex = 0,

  isOpen,

  onClose

}) {


  const [currentIndex, setCurrentIndex] =
    useState(activeIndex);





  /* ======================================
     UPDATE CURRENT IMAGE
  ====================================== */


  useEffect(() => {


    setCurrentIndex(activeIndex);


  }, [activeIndex]);







  /* ======================================
     KEYBOARD CONTROL
  ====================================== */


  useEffect(() => {


    if (!isOpen) return;



    const handleKeyDown = (event) => {



      if (event.key === "Escape") {


        onClose();


      }



      if (event.key === "ArrowRight") {


        handleNext();


      }



      if (event.key === "ArrowLeft") {


        handlePrevious();


      }



    };





    window.addEventListener(

      "keydown",

      handleKeyDown

    );





    return () => {


      window.removeEventListener(

        "keydown",

        handleKeyDown

      );


    };



  }, [

    isOpen,

    currentIndex,

    images.length

  ]);








  /* ======================================
     PREVIOUS IMAGE
  ====================================== */


  const handlePrevious = () => {


    setCurrentIndex(

      (previous) =>

        previous === 0

          ? images.length - 1

          : previous - 1

    );


  };







  /* ======================================
     NEXT IMAGE
  ====================================== */


  const handleNext = () => {


    setCurrentIndex(

      (next) =>

        next === images.length - 1

          ? 0

          : next + 1

    );


  };







  /* ======================================
     CLOSE OUTSIDE CLICK
  ====================================== */


  const handleOverlayClick = (event) => {


    if (

      event.target === event.currentTarget

    ) {


      onClose();


    }


  };







  /* ======================================
     NO RENDER
  ====================================== */


  if (!isOpen) {


    return null;


  }







  const currentImage =

    images[currentIndex];







  return (


    <div

      className="lightbox-overlay"

      onClick={handleOverlayClick}

    >



      <div

        className="lightbox-container"

      >




        <button

          className="lightbox-close"

          onClick={onClose}

          aria-label="Close Lightbox"

        >

          ✕

        </button>





        <img

          src={currentImage}

          alt="Project Preview"

          className="lightbox-image"

        />




/* ==========================================
   UCA LIGHTBOX COMPONENT

   FINAL PRODUCTION VERSION

   PART 2 / 2

   Navigation UI
   Image Counter
   Accessibility
   Final Structure
========================================== */





        <div

          className="lightbox-navigation"

        >



          <button

            className="lightbox-nav-btn lightbox-prev"

            onClick={handlePrevious}

            aria-label="Previous Image"

          >

            ←

          </button>





          <button

            className="lightbox-nav-btn lightbox-next"

            onClick={handleNext}

            aria-label="Next Image"

          >

            →

          </button>



        </div>







        <div

          className="lightbox-counter"

        >


          {currentIndex + 1}

          /

          {images.length}


        </div>





      </div>



    </div>


  );


}






export default Lightbox;





/* ==========================================
   END OF LIGHTBOX JSX

   FINAL PRODUCTION VERSION
========================================== */
