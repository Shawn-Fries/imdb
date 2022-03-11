export const getMovie = movieId => (
    $.ajax({
        url: `/api/movies/${movieId}`
    })
)