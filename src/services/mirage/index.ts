import { createServer, Factory, Model } from "miragejs";

type Continents = {
    name: string;
    slug: string;
    subtitle: string;
    description: string;
    bg_cover_url: string;
    thumb_url: string;
    amount_countries: number;
    amount_languages: number;
    cities_plus_one_hundred: number;
}

type Cities = {
    continent_id: number;
    name: string;
    country: string;
    flag_url: string;
    thumb_url: string; 
}

export function makeService(){
    const server = createServer({
        models:{
          continents: Model.extend<Partial<Continents>>({})  ,
          cities: Model.extend<Partial<Cities>>({}),
        },

        seeds(server){
            server.db.loadData({
                continents: [
                    {
                        id: 1,
                        name: 'Europa',
                        slug: 'europa',
                        subtitle: 'O continente mais antigo',
                        description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
                        bg_cover_url: 'europe.jpg',
                        thumb_url: 'europe.jpg',
                        amount_countries: 50,
                        amount_languages: 60,
                        cities_plus_one_hundred: 27,
                    },
                    {
                        id: 2,
                        name: 'America do Sul',
                        slug: 'america-do-sul',
                        subtitle: 'O continente com a maior biodiversidade',
                        description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
                        bg_cover_url: 'america-do-sul.jpg',
                        thumb_url: 'america-do-sul.jpg',
                        amount_countries: 50,
                        amount_languages: 60,
                        cities_plus_one_hundred: 27,
                    },
                    {
                        id: 3,
                        name: 'America do Norte',
                        slug: 'america-do-norte',
                        subtitle: 'O continente do norte',
                        description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
                        bg_cover_url: 'america-do-norte.jpg',
                        thumb_url: 'america-do-norte.jpg',
                        amount_countries: 50,
                        amount_languages: 60,
                        cities_plus_one_hundred: 27,
                    },
                    {
                        id: 4,
                        name: 'Ásia',
                        slug: 'asia',
                        subtitle: 'O continente da ásia',
                        description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
                        bg_cover_url: 'asia.jpg',
                        thumb_url: 'asia.jpg',
                        amount_countries: 50,
                        amount_languages: 60,
                        cities_plus_one_hundred: 27,
                    },
                    {
                        id: 5,
                        name: 'África',
                        slug: 'africa',
                        subtitle: 'O continente da África',
                        description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
                        bg_cover_url: 'africa.jpg',
                        thumb_url: 'africa.jpg',
                        amount_countries: 50,
                        amount_languages: 60,
                        cities_plus_one_hundred: 27,
                    },
                    {
                        id: 6,
                        name: 'Oceania',
                        slug: 'oceania',
                        subtitle: 'O continente da Oceania',
                        description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
                        bg_cover_url: 'oceania.jpg',
                        thumb_url: 'oceania.jpg',
                        amount_countries: 50,
                        amount_languages: 60,
                        cities_plus_one_hundred: 27,
                    }
                ],

                cities: [
                    {
                        id: 1,
                        continent_id: 1,
                        name: 'Londres',
                        country: 'Reino Unido',
                        flag_url: 'londres.jpg',
                        thumb_url: 'londres.jpg'
                    },
                    {
                        id: 2,
                        continent_id: 1,
                        name: 'Roma',
                        country: 'Itália',
                        flag_url: 'roma.jpg',
                        thumb_url: 'londres.jpg'
                    },
                    {
                        id: 3,
                        continent_id: 1,
                        name: 'Paris',
                        country: 'França',
                        flag_url: 'paris.jpg',
                        thumb_url: 'londres.jpg'
                    },
                    {
                        id: 4,
                        continent_id: 2,
                        name: 'São Paulo',
                        country: 'Brazil',
                        flag_url: 'são-paulo.jpg',
                        thumb_url: 'londres.jpg'
                    },
                    {
                        id: 5,
                        continent_id: 2,
                        name: 'Minas Gerais',
                        country: 'Brazil',
                        flag_url: 'minas-gerais.jpg',
                        thumb_url: 'londres.jpg'
                    }
                ]
            })
        },

        routes(){
            this.namespace = 'api';

            this.get('/continents', () => {
                return this.schema.all('continents')
            });

            this.get('/continents/:slug', (schema, request) => {
                const slug = request.params.slug;

                return schema.db.continents.findBy({ slug });
            });

            this.get('/cities/:continent_id', (schema, request) => {
                const continent_id = request.params.continent_id;

                return schema.db.cities.findBy({ continent_id });
            });

            this.namespace = '';
            this.passthrough();
        }
    });

    return server;
}