import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD', 'PUT', 'DELETE'],
})

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

let contatos: any[] = [
  {
    id: 1,
    phone: 11912345678,
    name: 'gian Souza',
    email: 'gian@ebac.com.br'
  },
  {
    id: 2,
    phone: 15932635178,
    name: 'Bruna Costa',
    email: 'brunca.costa@ebac.com.br'
  },
  {
    id: 3,
    phone: 11935730078,
    name: 'Felice Lacerda',
    email: 'felipe.lacerda@gmail.com'
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors)

  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    body.contato.id = contatos.length + 1 + new Date().getTime() + Math.random()

    contatos.push(body.contato);
    res.status(200).json({
        data: contatos,
    })
  }

  if (req.method === 'GET') {
    res.status(200).json({
        data: contatos,
    })
  }

  if (req.method === 'PUT') {
    const body = JSON.parse(req.body);

    const { contato } = body;

    const indexToChange =  contatos.findIndex(x => x.id === contato.id);
    console.log(indexToChange)
    contatos[indexToChange] = {
        ...contato,
    }
    
    res.status(200).json({
        data: contatos,
    })
  }

  if (req.method === 'DELETE') {
    const body = JSON.parse(req.body);
    contatos = contatos.filter(x => x.id !== body.id)
    
    res.status(200).json({
        data: contatos,
    })
  }
}
