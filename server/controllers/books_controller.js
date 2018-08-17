let books = [];
let id = 0;

module.exports = {
    read: (req, res) => {       //  <-- THIS WILL GET DATA
        console.log(req);
        res.status(200).send(books);
    },
    create: (req, res) => {
        let { title, author } = req.body;   //  <-- THIS WILL ADD NEW KEY AND VALUE IN ARRAY
        let book = {
            id: id,
            title: title,
            author: author
        }
        books.push(book);    //  <-- THIS WILL PUSH NEW ARRAY TO OLD ARRAY
        id++;
        console.log(req);
        res.status(200).send(books);
    },
    update: (req, res) => {     
        let index = null;
        books.forEach((book, i) => {
            if(book.id === Number(req.params.id)) index = i;
        })
        books[index] = {
            id: books[index].id,    //  <-- GET ID FROM ARRAY
            title: req.body.title || books[index].title,
            author: req.body.author || books[index].author
        };
        res.status(200).send(books);
    },
    delete: ( req, res ) => {       // <-- DELETE BY ID 
        let index = null;
        books.forEach((book, i) => {
          if(book.id === Number(req.params.id)) index = i;
        })
        books.splice(index, 1)
        res.status(200).send( books );
      }
    
}













