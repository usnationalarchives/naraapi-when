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

  slideClass() {
    if ( this.state.editMode || this.state.descriptionMode ) {
      return 'current-slide active-slide';
    }

    if ( this.props.order === 2 ) {
      return 'current-slide';
    } else if ( this.props.order === 1 ) {
      return 'prev-slide';
    } else if( this.props.order === 3 ) {
      return 'next-slide';
    } else {
      return 'hidden-slide';
    }
  }

  render() {
    console.log( this.props );
    return(
    <li className={this.slideClass()}>
      <button className={'edit-button'} onClick={() => {this.setState({editMode: !this.state.editMode, descriptionMode: false})}}>Edit</button>
      <div className={'image-container'}>
        <img src={this.props.image} alt={this.props.title} />
        {(this.state.editMode || this.state.descriptionMode) && 
          <button className={'desc-button'} onClick={() => {this.setState({editMode: true, descriptionMode: !this.state.descriptionMode})}}>Description</button>
        }
      </div>
      <div>
        {(this.state.editMode && !this.state.descriptionMode) && 
          <div className={'tags'}>
            {this.state.tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
            <TagForm naId={this.props.naId} onTagItem={this.props.onTagItem} token={this.props.token} />
          </div>
        }
        {(this.state.editMode && this.state.descriptionMode) && 
          <div className={'desc'}>
            <p>Year: {this.props.year}</p>
            <p>Title: {this.props.title}</p>
            <p>Description: {this.props.scope}</p>
          </div>
        }
      </div>
      <style jsx global>{`
        body {
          background-image:linear-gradient( to bottom left, #235692, #20bee4 );
        }
        section {
          transition:padding 200ms;
          overflow:${this.state.editMode ? 'visible !important' : 'hidden'};
        }
        section > ol {
          left:${this.state.editMode ? '-35% !important' : 'inherit'};
          right:${this.state.editMode ? '35% !important' : 'inherit'};
        }
      `}</style>
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
       li.active-slide {
         flex:0 0 70%;
       }
       div.image-container {
        overflow:hidden;
        height:${this.state.editMode ? '100%' : '80%'};
        position:relative;
        border-radius:0.5rem;
        box-shadow:0 0.4rem 1rem rgba(0,0,0,0.4);
       }
       li:not(.active-slide):not(.current-slide) div.image-container {
         height:80%;
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
        transition:width 200ms, height 100ms;
       }
       li.active-slide img {
        width: 100%;
        height: auto;
        left: 0;
        right: 0;
        margin: 0;
        bottom: initial;
        object-fit:initial;
       }
       button {
        display: ${this.props.order === 2 ? 'block' : 'none'};
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
