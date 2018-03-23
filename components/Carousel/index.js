import React from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable';
import { throttle } from 'lodash';
import CarouselItem from './CarouselItem';
import Button from '../form/Button';

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

    let order = 0;

    if (itemIndex - position < 0) {
      order = numItems - Math.abs(itemIndex - position);
    } else {
      order = itemIndex - position;
    }

    // shift by 2 to display the first image at start
    if ( order === ( numItems - 1 ) ) {
      order = 1;
    } else if ( order === ( numItems - 2 ) ) {
      order = 0;
    } else {
      order = order + 2;
    }

    return order;

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
      
      <Button
        btnName={'prev'}
        btnText={'Prev'}
        btnValue={'Prev'}
        onClick={() => this.prevSlide()}
        btnRole={'arrowPrev'}
        btnColor={'blue'}
      />

      <Button
        btnName={'next'}
        btnText={'Next'}
        btnValue={'Next'}
        onClick={() => this.nextSlide()}
        btnRole={'arrowNext'}
        btnColor={'blue'}
      />

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
                disableEditMode={true}
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

      <style jsx>{`
        div {
          width: 100%;
          overflow: hidden;
          position:relative;
          margin-bottom:5rem;
        }
        section {
          height:auto;
          overflow:hidden;
          position:relative;
          margin-bottom:0;
        }
        ol {
          transition: ${this.state.sliding ? 'left 200ms' : 'transform 200ms ease, left 200ms'};
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
          position:relative;
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
          margin-bottom:6rem;
        }
      `}</style>
    </div>
    );
  }
}

export default Carousel;
