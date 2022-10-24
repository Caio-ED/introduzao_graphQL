import { createServer } from "@graphql-yoga/node";

//1 esppecificar as operaçoes que existem. ou seja a nossa interface.
//tipo com ! nao pode null é obrgatorio o tipo especificado
const typeDefs = `
    type Livro {
        id: ID!
        titulo: String!
        genero: String!
        edicao: Int
        preco: Float
    },

    type Query {
        effectiveJava: Livro!
    }
`

//2 implementar as operações prometidas na interface. ou seja escrever o resolver para cada operação prometida. resolver é uma função.
const resolvers = {
    Query: {
        effectiveJava(){
            return {
                id: '123456',
                titulo: 'EffectiveJava',
                genero: 'Técnico',
                edicao: 3,
                preco: 43.9
            }
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