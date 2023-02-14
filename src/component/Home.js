import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Home() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  return (
    <div className='Home'>
      <br/>
      <h1>About</h1>
      <br/>
      <p>body text</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <Carousel responsive={responsive}>
      <div className='card'>
        <img 
          style ={{width: 300, height: 200}}
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjC-i-ZuoIsRmXvsG2xFa0MFK4Yav7-IYWFimUbqLtsBz5urgJ"
          alt='home pics'
        />
      </div>

      <div className='card'>
        <img 
          style ={{width: 300, height: 200}}
          src= "https://cdn-bcfmk.nitrocdn.com/fYEZdJKjvuXkKgFpeJrbqdViLvHKUQUB/assets/static/optimized/rev-0154c1e/wp-content/uploads/2017/12/IMG_8529-1024x683.jpg"
          alt='home pics'
        />
      </div>

      <div className='card'>
        <img 
          style ={{width: 300, height: 200}}
          src="https://adthrive.com/wp-content/uploads/2020/02/The-Woks-of-Life-family.jpg"
          alt='home pics'
        />
      </div>

      <div className='card'>
        <img 
          style ={{width: 300, height: 200}}
          src="http://ucanr.edu/blogs/food/blogfiles/69243.jpg"
          alt='home pics'
        />
      </div>

      <div className='card'>
        <img 
          style ={{width: 300, height: 200}}
          src="https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/eb410491-651b-49df-9a3c-c388088c3304/P7121975+%281%29.jpg"
          alt='home pics'
        />
      </div>

      <div className='card'>
        <img 
          style ={{width: 300, height: 200}}
          src="https://cms-tc.pbskids.org/parents/What-Are-Your-Favorite-Family-Traditions.jpg"
          alt='home pics'
        />
      </div>
      </Carousel>
    </div>
  )
}

{/* <h2>sports sneaker</h2>
    <p className='price'>$$$$$ </p>
    <p>dkjshkdjsa</p>
    <p>
      <button> add to cart </button>
    </p> */}

