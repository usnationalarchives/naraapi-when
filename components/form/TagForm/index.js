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
          Tag
          <input type='text' value={this.state.tags} name='tag' onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default TagForm;
