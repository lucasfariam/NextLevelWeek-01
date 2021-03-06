
// importar dependencias do sqlite3
const sqlite3 = require("sqlite3").verbose()
//iniciar o obj de banco de dados criar obj que ira fazer operaçoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db




// utilizar o bd para nossas operaçoes
/**db.serialize(() => {
    //1-criar tabela com comandos sql
    db.run(`
        CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
    // 2-inserir dados na tabela
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);    
`
const values = [
    "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "Papersider",
    "Guilherme gemballa, Jardim America",
    "Numero 260",
    "Santa Catarina",
    "Rio do Sul",
    "Papéis e papelão"
]

function afterInsertData(err) {
    if(err) {
        return console.log(err)
    }

    console.log("Cadastrado com Sucesso")
    console.log(this)
}

//db.run(query, values, afterInsertData)    

    // 3-consultar os dados da tabela
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estao seus registro: ")
        console.log(rows)
    })

 //--- para apagar registro descomentar codigo  
    // 4-deletar dados da tabela por comando
    //db.run(`DELETE FROM places WHERE id = ?`, [1], function (err) {
    //  if(err) {
    //        return console.log(err)
    //    }

    //    console.log("Registro deletado com Sucesso")
    //})


}) **/