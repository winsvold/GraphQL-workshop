const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
       getShow(id: Int): Futurama
       futurama: Futurama
    }

    type Futurama {
        id: Int
        url: String
        name: String
        type: String
        language: String
        genres: [String]
        status: String
        premiered: String
        officialSite: String
        image: Image
        summary: String
        episodes: [Episode]
        episode(id: Int) : Episode
     }
     
     type Image {
        medium: String
        original: String
     }

     type Episode {
        id: Int
        url: String
        name: String
        season: Int
        number: Int
        image: Image
        summary: String
     }
`


module.exports = typeDefs;
