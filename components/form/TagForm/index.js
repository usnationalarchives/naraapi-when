import React from 'react';
import PropTypes from 'prop-types';

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({tags: event.target.value});
  }

  //TODO Looks like commas can't be in tags, also disable the form after tag is posted.
  handleSubmit(event) {
    event.preventDefault();
    const { onTagItem } = this.props;
    fetch('https://catalog.archives.gov/api/v1/id/' + this.props.naId + '/tags?text=' + this.state.tags, {
      method: 'POST',
      headers: {
        'Authorization': this.props.token
      }
    }).then(function(response) {
      return response.json()
    }).then(function(body){
      if(body.opaResponse.header['@status'] == '200') {
        onTagItem();
      }
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>Enter new tag</span>
          <input placeholder='Enter new tag' type='text' value={this.state.tags} name='tag' onChange={this.handleChange} />
        </label>
        <button type='submit'><span>Submit</span></button>
        <style jsx>{`
          form {
            padding-top:3rem;
            padding-bottom:3rem;
          }
          span {
            position:absolute;
            height:1px;
            width:1px;
            overflow:hidden;
            clip:rect(1px, 1px, 1px, 1px);
          }
          input[type="text"] {
            border:0;
            border-bottom:0.2rem solid #fff;
            padding:1rem;
            text-align:center;
            background:transparent;
            font-family:inherit;
            font-size:1.6rem;
            letter-spacing:0.1rem;
            text-transform:uppercase;
            margin-right:1rem;
            caret-color:#fff;
            color:#fff;
          }
          ::-webkit-input-placeholder {
            color: #fff;
          }
          ::-moz-placeholder { /* Firefox 19+ */
            color: #fff;
          }
          :-ms-input-placeholder { /* IE 10+ */
            color: #fff;
          }
          :-moz-placeholder { /* Firefox 18- */
            color: #fff;
          }
          button {
            background:#132f50;
            border:0;
            overflow:hidden;
            border-radius:50%;
            box-shadow:0 0.3rem 0.6rem rgba( 0, 0, 0, 0.4 );
            outline:none;
            width:4rem;
            height:4rem;
            top:0.2rem;
          }
          button:hover {
            cursor:pointer;
          }
          button::after {
            content:'';
            display:inline-block;
            width:1rem;
            height:1rem;
            border:0.3rem solid #fff;
            border-left:0;
            border-top:0;
            transform:rotate(-45deg);
            margin-top:0.2rem;
            margin-left:-0.5rem;
          }


        `}</style>
      </form>
    );
  }
}

export default TagForm;
