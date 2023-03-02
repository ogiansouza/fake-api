import vagas from '@/mocks/vagas'
import Vaga from '@/models/Vaga'
import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  await runMiddleware(req, res, cors)

  res.status(200).json([
    {
        nome: 'Bermuda Adidas Masculina',
        preco: 129.9
    },
    {
        nome: 'Camisa Corinthians 1 - 22/23',
        preco: 249.9
    },
    {
        nome: 'Bola de Vôlei Penalty',
        preco: 139.9
    },
    {
        nome: 'Camisa Internacional 2 - 22/23',
        preco: 249.9
    },
    {
        nome: 'Patins Preto',
        preco: 399.9
    },
    {
        nome: 'Camisa Kansas City Chiefs',
        preco: 379.9
    },
    {
        nome: 'Camisa Real Madrid 1 - 22/23',
        preco: 349.9
    },
    {
        nome: 'Camisa Milan 1 - 22/23',
        preco: 349.9
    },
    {
        nome: 'Camisa Borussia Dortmund - 22/23',
        preco: 349.9
    },
  ])
}