import { createServer } from "@graphql-yoga/node";

//1 esppecificar as operaçoes que existem. ou seja a nossa interface.
//tipo com ! nao pode null é obrgatorio o tipo especificado
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        id: ID!
        localizacao: String!
        idade: Int!
        deMaior: Boolean!
        salario: Float!
    }
`

//2 implementar as operações prometidas na interface. ou seja escrever o resolver para cada operação prometida. resolver é uma função.
const resolvers = {
    Query: {
        hello () {
            return 'Hello, GraphQL!!!'
        },
        name () {
            return 'joao'
        },
        id () {
            return 'umid'
        },
        localizacao(){
            return ''
        },
        idade () {
            return 3
        },
        deMaior () {
            return true
        },
        salario () {
            return 432432
        }
    }
}

//3 construir um servidor entregando a ele a especificação das operaões e mais ainda, a sua implementação.
const server = createServer({
    schema: {
        typeDefs,
        resolvers
    }
});

server.start(()=>{
    console.log('servidor no ar');
})