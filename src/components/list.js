import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class List extends Component {
    state = {
        films: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/filmy/', {
            headers: { Authorization: 'Token 2f769e9378362d5c7da628fb7fdb37489f13942d' }
        }).then(res => {
            this.setState({ films: res.data });
        }).then(err => {
            console.log('error ', err);
        })
    }

    render() {
        return (
            <div>
                <h1 className="main">Lista filmów z React</h1>
                {this.state.films.map(film => {
                    return (
                        <Link to={'/details/' + film.id + '/'}>
                            <img key={film.id} src={film.poster} width="150" height="220" alt="film plakat" />
                        </Link>
                    )
                })
                }
            </div>
        );
    }
}

export default List;