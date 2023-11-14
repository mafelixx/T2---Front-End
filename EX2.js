//Exercício 2

const axios = require('axios');

const apiKey = '3c1fea68eb22765e9adce5cb4b4779dd';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function obterCoordenadasAtuais(lat, lon) {
    try {
        const response = await axios.get(apiUrl, {
            params: {
                lat: lat,
                lon: lon,
                appid: apiKey,
                units: 'metric',
            },
        });
        if(response.data) {
            const {main, weather} = response.data;
            const sensacaoTermica = main.feels_like;
            const descricao = weather[0].description;

            console.log(`Sensação Térmica: ${sensacaoTermica}ºC`);
            console.log(`Descrição: ${descricao}`);
        }else{
            console.log('Não foi possível obter informações de condições atuais.');
        }
    }catch (error) {
        console.error(`Erro ao obter condições atuais:${error.message}`);
    }
}

obterCoordenadasAtuais(-23.5506507, -46.6333824);


