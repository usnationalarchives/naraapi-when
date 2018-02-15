import React from 'react';

import Slide from './Slide';

class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: props.itemData,
      currentItem: props.currentItem,
      onGuessYear: props.onGuessYear
    }
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

  render() {
    const gameItems = this.state.items.map((gameItem, index) => 
      <Slide
        key={gameItem.naId}
        title={gameItem.description.item.title}
        img={this.getImage(gameItem)}
        year={gameItem.description.item.productionDateArray.proposableQualifiableDate.year}
        naId={gameItem.naId}
        onGuessYear={this.state.onGuessYear}
        currentItem={index}
      />
    );
    return (
      <div>
        {gameItems[this.props.currentItem]}
      </div>
    );
  }

}

export default Slider;