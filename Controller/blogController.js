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

// destroy

function destroy(req, res) {

    const id = req.params.id;

    const query = "DELETE FROM `posts` WHERE id = ?"

    connection.query(query, [id], (err) => {
        if (err)
            return res.status(500)
                .json({ error: 'Failed to delete pizza' });
        res.sendStatus(204)
    })

}

export default
    {
        index,
        destroy
    }