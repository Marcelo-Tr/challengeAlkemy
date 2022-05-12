const mongoose = require("mongoose");
//BD CONECTION creando funcion  de conexion que se usa en app
const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(
    DB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err, res) => {
            if (!err) {
                console.log('*** CONEXION CORRECTA ***');
            }else{
                console.log('*** ERROR DE CONEXION ***');
            }
        } 
    );    
};

module.exports = dbConnect; //EXPORT exportando funcion dbConnect