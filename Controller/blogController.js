import connection from "../data/db.js";


// index
function index(req, res) {
    const query = "SELECT * FROM `posts`"
    connection.query(query, (err, results) => {
        if (err) {
            console.log(err)
        }
        res.json(results)
    });
}

// show
function show(req, res) {

    const id = req.params.id;

    const query = "SELECT * FROM `posts` WHERE id = ?"
    connection.query(query, [id], (err, results) => {
        if (err)
            return res.status(500)
                .json(
                    { error: 'Database query failed' }
                );
        if (results.length === 0)
            return res.status(404)
                .json(
                    { error: 'Post not found' }
                );
        res.json(results[0]);
    });

}







// destroy

function destroy(req, res) {

    const id = req.params.id;

    const query = "DELETE FROM `posts` WHERE id = ?"

    connection.query(query, [id], (err) => {
        if (err)
            return res.status(500)
                .json({ error: 'Failed to delete post' });
        res.sendStatus(204)
    })

}

export default
    {
        index,
        show,
        destroy,
    }