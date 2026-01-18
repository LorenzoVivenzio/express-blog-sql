import connection from "../data/db.js";

function index(req, res) {
    const query = "SELECT * FROM `posts`"
    connection.query(query, (err, results) => {
        if (err) {
            console.log(err)
        }
        res.json(results)
    });
}

export default
    {
        index,
    }