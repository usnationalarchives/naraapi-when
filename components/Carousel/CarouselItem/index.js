import React from 'react';
import PropTypes from 'prop-types';
import TagForm from '../../form/TagForm';
import Button from '../../form/Button';

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

  componentWillReceiveProps(nextProps) {
    if ( nextProps.disableEditMode ) {
      this.setState({editMode:false,descriptionMode:false});
    }
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
      <div className={'outer-image-container'}>
        <div className={'image-container'}>
          <img src={this.props.image} alt={this.props.title} />
        </div>
        <button className={'edit-button'} onClick={() => {this.setState({editMode: !this.state.editMode, descriptionMode: false})}}>Edit</button>
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
            <Button
              btnName={'close_desc'}
              btnText={'× Close'}
              btnValue={'× Close'}
              onClick={() => this.setState({editMode:false,descriptionMode:false})}
              btnRole={'secondary'}
              btnColor={'blue'}
            />
          </div>
        }
        {(this.state.editMode && this.state.descriptionMode) && 
          <div className={'desc'}>
            {(this.props.year) &&
              <p className={'year'}>{this.props.year}</p>
            }
            {(this.props.title) &&
              <p className={'title'}>{this.props.title}</p>
            }
            <p className={'scope'}>{this.props.scope ? this.props.scope : 'No description available'}</p>
            <Button
              btnName={'close_desc'}
              btnText={'× Close'}
              btnValue={'× Close'}
              onClick={() => this.setState({editMode:true,descriptionMode:false})}
              btnRole={'secondary'}
              btnColor={'blue'}
            />
          </div>
        }
      </div>
      <style jsx global>{`
        body {
          background-image:linear-gradient( to bottom left, #235692, #20bee4 );
        }
        section {
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
        flex: 0 0 50%;
        padding:0 1rem 1rem;
        overflow:hidden;
        position:relative;
        transition:flex 200ms;
       }
       li.active-slide {
         flex:0 0 70%;
       }
       div.outer-image-container {
         position:relative;
       }
       div.image-container {
        overflow:hidden;
        height:0;
        padding-bottom:115%;
        position:relative;
        border-radius:0.5rem;
        box-shadow:0 0.4rem 1rem rgba(0,0,0,0.4);
        background:#fff;
        overflow:hidden;
       }
       li.active-slide div.image-container {
         height:auto;
         padding:0;
       }
       img {
        width:150%;
        height:auto;
        max-width:200%;
        object-fit:cover;
        position:relative;
        margin:-1rem -25% 0;
        display:block;
       }
       li.active-slide img {
        width: 100%;
        height: auto;
        left: 0;
        right: 0;
        margin: 0;
        position:relative;
        bottom: initial;
        object-fit:initial;
       }
       button {
        display: ${this.props.order === 2 ? 'block' : 'none'};
        position:absolute;
        z-index:2;
        bottom:-0.8rem;
        right:-0.8rem;
        width:3.5rem;
        height:3.5rem;
        border:0;
        background:#fff;
        text-indent:-999rem;
        overflow:hidden;
        border-radius:50%;
        box-shadow:0 0 0.4rem rgba(0,0,0,0.7);
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
       button:hover {
         cursor:pointer;
       }
       button.desc-button {
         left:-0.8rem;
         right:auto;
         opacity:0;
         animation:descButton 400ms;
         animation-delay:200ms;
         animation-fill-mode: forwards;
       }
       button.desc-button::after {
         content:"?";
         background:none;
         color:#112e51;
         text-indent:0;
         font-size:2.4rem;
         font-weight:700;
         margin-top:0.3rem;
       }
       .tags {
         padding-top:3rem;
       }
       .tags p {
         display:inline-block;
         background:#fff;
         border-radius:4rem;
         color:#112e51;
         font-size:1.4rem;
         text-transform:uppercase;
         font-weight:700;
         padding:1rem 2rem;
         margin:1rem;
       }

        .desc .title {
          margin-top:0;
          font-size:2rem;
          font-weight:600;
          color:#fff;
          line-height:1.2;
        }
        .desc .year {
          margin-top:3rem;
          margin-bottom:0.5rem;
          font-size:1.6rem;
          color:#fff;
        }
        .desc .scope {
          font-style:${this.props.scope ? 'normal' : 'italic'};
          margin-bottom:3rem;
        }

        @-webkit-keyframes descButton {
          0% {
            opacity: 0;
            left:90%;
          }
          100% {
            opacity: 1;
            left:-0.8rem;
          }
        }
        @keyframes descButton {
          0% {
            opacity: 0;
            left:90%;
          }
          100% {
            opacity: 1;
            left:-0.8rem;
          }
        }
      `}</style>
      
    </li>
    );
  }
};

export default CarouselItem;
