import React from 'react';
import { func } from 'prop-types';
import {Form, Button, FormControl, Navbar} from 'react-bootstrap';

class SearchBar extends React.Component {
    static propTypes = {
        handleFormOnSubmit: func
      };

    state = {
        query: ''
    };
    handleChange = event => {
        this.setState({
            query: event.target.value
        });
    };
    handleSubmit = event => {
        let {handleFormOnSubmit} = this.props,
            {query} = this.state;
        event.preventDefault();
        handleFormOnSubmit(query);
    }

    render() {
        return (
            <Navbar bg="ligth" expand="lg">
                <Navbar.Brand className="ml-2" href="https://youtube.com">
                <img
                    src="https://www.webrankinfo.com/dossiers/wp-content/uploads/youtube-logo-2017-743.png"
                    width="180"
                    height="60"
                    className="d-inline-block align-top"
                    alt=''
                />
                </Navbar.Brand>
                <Form inline onSubmit={this.handleSubmit} >
                    <FormControl className="ml-1" onChange={this.handleChange} size="lg" type="text"  placeholder="Search" />
                     <Button  className="ml-3"  size="lg" type="submit">Search</Button>
                </Form>
            </Navbar>
        )
    }
}
export default SearchBar;
