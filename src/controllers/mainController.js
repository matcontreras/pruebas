const index = (req, res) => {
    res.render('index', {title:'Mi Titulo'});
}; 
const notFound = (req, res) => {
    res.send(`<h1>404 Página no encontrada</h1>
    <a href="/"> Inicio </a>`);
}; 

const mainController = {
    index,
    notFound
};

module.exports = mainController; 