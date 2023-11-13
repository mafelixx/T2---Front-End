//Exercício 1

const axios = require('axios');

const apiKey = '3c1fea68eb22765e9adce5cb4b4779dd';
const apiUrl = 'https://api.openweathermap.org/geo/1.0/direct';



async function obterCoordenadas(cidade) {
    try {
        const response = await axios.get(apiUrl, {
            params: {
                q: cidade,
                appid: apiKey,
            },
        });

        console.log(response.data);

        if(response.data.length> 0) {
            const primeiraCidade = response.data[0];
            const {lat, lon} = primeiraCidade;
            console.log(`Coordenadas de ${cidade}: Latitude ${lat}, Longituded ${lon}`);
        } else {
            console.log(`Não foi possível encontrar coordenadas para ${cidade}.`);
        }
    } catch (error) {
        console.error(`Erro ao obter coordenadas: ${error.message}`);
    }
}

obterCoordenadas('São Paulo');

