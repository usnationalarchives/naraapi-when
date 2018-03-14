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
    console.log( this.props );
    return(
    <li>
      <button onClick={() => {this.setState({editMode: true, descriptionMode: false})}}>Edit</button>
      <div className={'image-container'}>
        <img src={this.props.image} alt={this.props.title} />
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
        box-sizing:border-box;
        order: ${this.props.order};
        // background: green;
        flex: 0 0 50%;
        padding:0 1rem 1rem;
        overflow:visible;
        position:relative;

       }
       div.image-container {
        overflow:hidden;
        height:100%;
        position:relative;
       }
       img {
        width:auto;
        height:auto;
        max-width:200%;
        object-fit:cover;
        position:absolute;
        top:0;
        right:-100rem;
        bottom:0;
        left:-100rem;
        margin:-2rem auto 0;
       }
       button {
        position:absolute;
        z-index:2;
        bottom:0.2rem;
        right:0;
        width:3.5rem;
        height:3.5rem;
        border:0;
        background:#fff;
        text-indent:-999rem;
        overflow:hidden;
        border-radius:50%;
        box-shadow:0.1rem 0.1rem 0.2rem rgba(0,0,0,0.7);
       }
       button:after {
         content:'';
         position:absolute;
         color:#000;
         width:3.5rem;
         height:3.5rem;
         display:block;
         background:url('/static/pencil-blue.png') no-repeat;
         background-size:1.6rem;
         background-position:center;
         top:0;
         left:0;
       }
      `}</style>
      
    </li>
    );
  }
};

export default CarouselItem;
