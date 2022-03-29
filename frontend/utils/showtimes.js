export const getShowtimes = zipCode => (
    $.ajax({
        url: `/api/showtimes/${zipCode}/`
    })
)