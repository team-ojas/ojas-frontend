import './Projects.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

function createSlide () {
  const style = {
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <SwiperSlide style={style}>
      <img className='img' src='https://www.w3schools.com/css/img_forest.jpg' alt='' />
      <div class='overlay'>
        <h2>Irrigation System using Na</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione soluta maxime nemo recusandae qui blanditiis repudiandae labore perferendis dolorum quaerat? Velit ducimus alias accusantium quas iure et quidem. Perferendis, voluptate.</p>
      </div>
    </SwiperSlide>
  )
}

export default function Projects () {
  return (
    <div className='projects-container' style={{ background: '#2B2B2B' }}>
      <div className='content'>
        <h1 style={{ marginBottom: '30px' }}>Projects</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui libero, nulla quo sequi doloribus dicta, ea similique voluptatum minus voluptates architecto beatae quam eum nam fugiat. Soluta, saepe ipsa?</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        {createSlide()}
        {createSlide()}
        {createSlide()}
        {createSlide()}
      </Swiper>
    </div>
  )
}
