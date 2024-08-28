import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService';
class Movies extends Component {
    state = { 
        movie : getMovies()
     } 
     handleDelete = (movie)=>{
            console.log(`This movie ${movie.title} has been deleted with id: ${movie._id}`);
            
            const movies = this.state.movie.filter(m => m._id !== movie._id);
            this.setState({movie:movies})
     }
     render() { 
         if(this.state.movie.length === 0 ) {
            return <p>There is no movie in the database</p>;
            }
        return (
            <>
        
            <p>Showing {this.state.movie.length} Movies in the database</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movie.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <button onClick={() => this.handleDelete(movie)} className='btn btn-danger btn-sm'>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </>
        );
    }
}
 
export default Movies;