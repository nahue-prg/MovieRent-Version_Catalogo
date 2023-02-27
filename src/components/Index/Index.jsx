import styles from './styles.module.css'
import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items2 = [
    
    {

      caption: '1'
    },
    {

      caption: '2'
    },
    {
 
      caption: '3'
    },
    {
 
      caption: '4'
    },
    {
     
      caption: '5'
    }
    
  ];

const items = [
    
  {
    src: 'https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg ',
    altText: 'Slide 1',
    caption: '1'
  },
  {
    src: 'https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg ',
    altText: 'Slide 1',
    caption: '2'
  },
  {
    src: 'https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg ',
    altText: 'Slide 1',
    caption: '3'
  },
  {
    src: 'https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg ',
    altText: 'Slide 1',
    caption: '4'
  },
  {
    src: 'https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg ',
    altText: 'Slide 1',
    caption: '5'
  },
  {
    src: 'https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg ',
    altText: 'Slide 1',
    caption: '6'
  },
  {
    src: 'https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg ',
    altText: 'Slide 1',
    caption: '7'
  },
  {
    src: 'https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg ',
    altText: 'Slide 1',
    caption: '8'
  },
  {
    src: 'https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg ',
    altText: 'Slide 1',
    caption: '9'
  },
  {
    src: 'https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg ',
    altText: 'Slide 1',
    caption: '10'
  },
  {
    src: 'https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg ',
    altText: 'Slide 1',
    caption: '11'
  },
  {
    src: 'https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg ',
    altText: 'Slide 1',
    caption: '12'
  },
  {
    src: 'https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg ',
    altText: 'Slide 1',
    caption: '13'
  },
  {
    src: 'https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg ',
    altText: 'Slide 1',
    caption: '14'
  },
  {
    src: 'https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg ',
    altText: 'Slide 1',
    caption: '15'
  }

  
];

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.itemsPerSlide = 3; // Define la cantidad de items por cada slide
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items2.length - 1? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items2.length - 1: this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = [];
   
    
    for (let i = 0; i < items.length; i += this.itemsPerSlide) {
      const slideItems = items.slice(i, i + this.itemsPerSlide);
      const slide = (
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={i}>
            <div style={{display:'flex', justifyContent:'space-around'}}>
          {slideItems.map((item) => (
            <div key={item.caption}>
              <img src={item.src} alt={item.altText} />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </div>
          ))}
          </div>
        </CarouselItem>
      );
      slides.push(slide);
    }

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        style={{maxWidth:'', margin:''}}
      >
        <CarouselIndicators items={items2} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Index;

