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
      slideTransform: 'translateX(calc(-100%))'
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
    this.setState({
      sliding: true,
      position,
      direction,
      slideTransform: (direction === 'prev') ? 'translateX(calc(2 * (-100%)))' : 'translateX(calc(-100%))'
    });
    setTimeout(() => {
      this.setState({
        sliding: false
      }), 50
    });
  }
  
  calcTransform() {
    if (!this.state.sliding) return 'translateX(calc(-100%))'
    if (this.state.direction === 'prev') return 'translateX(calc(2 * (-100%)))'
    return 'translateX(0%)'
  };

  handleSwipe = throttle((isNext) => {
    if (isNext) {
      this.nextSlide()
    } else {
      this.prevSlide()
    }
  }, 200, { trailing: false })


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
      </Swipeable>
      <button onClick={() => this.prevSlide()}>Prev</button>
      <button onClick={() => this.nextSlide()}>Next</button>
      <style jsx>{`
        div {
          width: 100%;
          overflow: hidden;
        }
        ol {
          display: flex;
          margin: 0 0 20px 20px;
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
      <style jsx>{`
        ol {
          transition: ${this.state.sliding ? 'none' : 'transform 1s ease'};
          transform: ${transformOffset};
          margin:0;
          padding:0;
        }
      `}</style>
    </div>
    );//transform: ${this.state.sliding ? 'translateX(calc(-80% - 20px))' : 'translateX(0%)'}
  }
}

export default Carousel;
