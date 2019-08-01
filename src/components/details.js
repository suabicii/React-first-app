import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Details extends Component {

    state = {
        film: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get('http://127.0.0.1:8000/api/filmy/' + id + '/', {
            headers: { Authorization: 'Token 2f769e9378362d5c7da628fb7fdb37489f13942d' }
        }).then(res => {
            this.setState({ film: res.data });
        }).then(err => {
            console.log('error ', err);
        })
    }

    render() {
        const baseUrl = "http://127.0.0.1:8000";
        return (
            <div>
                {this.state.film ? (
                    <div className="details">
                        <img src={baseUrl + this.state.film.poster} width="200" alt="film plakat" />
                        <div>
                            <h1>{this.state.film.title} ({this.state.film.year})</h1>
                            <p>{this.state.film.description}</p>
                            <Link to="/list/">Powrót</Link>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Details;