import React from 'react';
import PropTypes from 'prop-types';
import TagForm from '../../form/TagForm';

class CarouselItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      descriptionMode: false
    }
    this.getTags = this.getTags.bind(this);
  }

  getTags() {
    let _tags = [];
    if(this.props.publicContrib) {
      if (this.props.publicContrib.tags) {
        if(this.props.publicContrib.tags.tag.constructor === Array) {
          this.props.publicContrib.tags.tag.map((tag) => {
            _tags.push(tag['$']);
          });
        } else {
          _tags.push(this.props.publicContrib.tags.tag['$'])
        }
      } else {
        _tags.push('Be the first to tag this item.');
      }
    } else {
      _tags.push('Be the first to tag this item.');
    }

    return _tags;
  }

  componentWillMount() {
    this.setState({
      tags: this.getTags()
    })
  }

  render() {
    return(
    <li>
      <div>
        <img src={this.props.image} alt={this.props.title} />
        <button onClick={() => {this.setState({editMode: true, descriptionMode: false})}}>Edit</button>
        {(this.state.editMode || this.state.descriptionMode) && 
          <button onClick={() => {this.setState({editMode: true, descriptionMode: !this.state.descriptionMode})}}>Description</button>
        }
      </div>
      <div>
        {(this.state.editMode && !this.state.descriptionMode) && 
          <div>
            {this.state.tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
            <TagForm naId={this.props.naId} onTagItem={this.props.onTagItem} token={this.props.token} />
          </div>
        }
        {(this.state.editMode && this.state.descriptionMode) && 
          <div>
            <p>Year: {this.props.year}</p>
            <p>Title: {this.props.title}</p>
            <p>Description: {this.props.scope}</p>
          </div>
        }
        
      </div>
      <style jsx>{`
       li {
        order: ${this.props.order};
        background: green;
        flex: 1 0 100%;
        /*
        flex-basis: 80%;
        margin-right: 20px;
        height:0;
        padding-bottom:100%; */
       }
       img {
         width: 100%;
       }
      `}</style>
      
    </li>
    );
  }
};

export default CarouselItem;
