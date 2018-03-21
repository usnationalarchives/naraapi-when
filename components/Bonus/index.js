import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../Carousel';
import CarouselItem from '../Carousel/CarouselItem';
import Button from '../form/Button';

class Bonus extends React.Component {

  constructor(props) {
    super(props);
    this.getImage = this.getImage.bind(this);
  }

  getImage(src) {
    let _src;
    if (src.objects.object.constructor === Array) {
      _src = src.objects.object['0'].file['@url'];
    } else {
      _src = src.objects.object.file['@url'];
    }
    return _src;
  }

  getTags

  componentWillMount() {
    const slides = this.props.itemData.slice(0, this.props.currentItem).map((slide) =>
      ({
        slideTitle: slide.description.item.title,
        naId: slide.naId,
        img: this.getImage(slide),
        year: slide.description.item.productionDateArray.proposableQualifiableDate.year,
        scope: slide.description.item.scopeAndContentNote,
        publicContrib: slide.publicContributions,
        onTagItem: this.props.onTagItem,
        token: this.props.token
      })
    )

    this.setState((prevState, props) => {return {slideItems: slides};});
  }

  render() {
    return(
      <div>
        <Carousel title={'Bonus'} text={'Tag the photos from the game for additional points.'}>
          {this.state.slideItems}
        </Carousel>
        <Button
          btnName={'see_results'}
          btnText={'Next'}
          btnValue={'Next'}
          onClick={this.props.onSeeResults}
          btnRole={'afterTextWide'}
          btnColor={'blue'}
        />
      </div>
    );
  }
}

export default Bonus;
