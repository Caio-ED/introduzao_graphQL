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
        bemVindo(nome: String): String!
        effectiveJava: Livro!
        notas: [Int!]!
        adicionar(numeros: [Float!]!): Float!
    }
`

//2 implementar as operações prometidas na interface. ou seja escrever o resolver para cada operação prometida. resolver é uma função.
const resolvers = {
    Query: {
        bemVindo(parents, args, ctx, info) {
            // console.log(parents);
            console.log(args);
            // console.log(ctx);
            // console.log(info);
            
            return `Bem vindo ${args.nome ? args.nome : 'Visitante'}!`
        },
        effectiveJava(){
            return {
                id: '123456',
                titulo: 'EffectiveJava',
                genero: 'Técnico',
                edicao: 3,
                preco: 43.9
            }
        },
        notas(){
            return [1,2,3,4,5]
        },
        adicionar(parents, args, ctx, info) {
            return  args.numeros.length <= 0 ? 0:
            args.numeros.reduce((ac, atual) => {
                return ac + atual;
            })
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