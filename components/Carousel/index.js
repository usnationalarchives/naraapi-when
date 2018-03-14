import React from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable';
import { throttle } from 'lodash';
import CarouselItem from './CarouselItem';

class Carousel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      sliding: false,
    }
    this.getOrder = this.getOrder.bind(this);
    this.doSliding = this.doSliding.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.calcTransform = this.calcTransform.bind(this);
    //this.handleSwipe = this.handleSwipe.bind(this);
  }

  getOrder(itemIndex) {
    const {position} = this.state;
    const {children} = this.props;
    const numItems = children.length || 1;

    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position);
    }

    return itemIndex - position;
  }

  nextSlide() {
    const {position} = this.state;
    const {children} = this.props;
    const numItems = children.length || 1;

    this.doSliding('next', position === numItems - 1 ? 0 : position + 1);
  }

  prevSlide() {
    const {position} = this.state;
    const {children} = this.props;
    const numItems = children.length || 1;

    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
  }

  doSliding(direction, position) {
    console.log( 'doSliding' );
    this.setState({
      sliding: true,
      position,
      direction,
    });
    setTimeout(() => {
      this.setState({
        sliding: false
      }), 50
    });
  }
  
  calcTransform() {
    if (!this.state.sliding) return 'translateX(calc(-50%))'
    if (this.state.direction === 'prev') return 'translateX(calc(2 * (-50%)))'
    return 'translateX(0%)'
  };

  handleSwipe = throttle((isNext) => {
    if (isNext) {
      this.nextSlide()
    } else {
      this.prevSlide()
    }
  }, 500, { trailing: false })

  render() {
    let transformOffset = this.calcTransform();
    return (
    <div>
      <h2>{this.props.title}</h2>
      <p>{this.props.text}</p>
      
      <Swipeable
        onSwipingLeft={ () => this.handleSwipe(true) }
        onSwipingRight={ () => this.handleSwipe() }
      >
        <section>
          <ol>
            {this.props.children.map((child, index) => (
              <CarouselItem 
                key={index}
                image={child.img}
                title={child.slideTitle}
                order={this.getOrder(index)}
                publicContrib={child.publicContrib}
                naId={child.naId}
                year={child.year}
                scope={child.scope}
                onTagItem={child.onTagItem}
                token={child.token}
              />
            ))}
          </ol>
        </section>
      </Swipeable>
     
      <button onClick={() => this.prevSlide()}>Prev</button>
      <button onClick={() => this.nextSlide()}>Next</button>
      <style jsx>{`
        div {
          width: 100%;
          overflow: hidden;
          position:relative;
          margin-bottom:5rem;
        }
        section {
          height:0;
          padding-bottom:50%;
          overflow:hidden;
          position:relative;
          margin-bottom:5rem;
        }
        ol {
          transition: ${this.state.sliding ? 'none' : 'transform 200ms ease'};
          transform: ${transformOffset};
          display: flex;
          margin: 0;
          padding: 0;
          position:absolute;
          left:-25%;
          right:25%;  
          top:0;
          bottom:0;
          list-style: none;
        }
        h2 {
          font-size:2.6rem;
          text-transform:uppercase;
          text-shadow:0.05rem 0.05rem 0.1rem rgba( 0, 0, 0, 0.3 );
          margin-bottom:1rem;
        }
        p {
          font-size:1.8rem;
          max-width:25rem;
          margin:0 auto;
          line-height:1.3;
          margin-bottom:3rem;
        }
      `}</style>
    </div>
    );
  }
}

export default Carousel;
