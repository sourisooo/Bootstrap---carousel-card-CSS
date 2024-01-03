const client = require('./database'); 

const pokedexModel = {

    async getll(){

        const sqlQuery = `
        SELECT *
        FROM pokemon
     
        `;


        // la variable result va contenir ce que retourne la méthode
        let result;
        try{
            response = await client.query(sqlQuery);

            result = response.rows;
            console.log(result);
        }
        catch(error){
            console.error("ERROR :",error);
        }

        // si tout se passe bien, result va contenir la liste des étudiants
        // s'il y a une erreur, result sera null
        return result;


    }




};

module.exports = pokedexModel;