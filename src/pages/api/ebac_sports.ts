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
        id: 1,
        nome: 'Bermuda Adidas Masculina',
        imagem: 'https://fake-api-tau.vercel.app/ebac_sports/bermuda.webp',
        preco: 129.9
    },
    {
        id: 2,
        nome: 'Camisa Corinthians 1 - 22/23',
        imagem: 'https://fake-api-tau.vercel.app/ebac_sports/corinthians.webp',
        preco: 249.9
    },
    {
        id: 3,
        nome: 'Bola de Vôlei Penalty',
        imagem: 'https://fake-api-tau.vercel.app/ebac_sports/bola.webp',
        preco: 139.9
    },
    {
        id: 4,
        nome: 'Camisa Internacional 2 - 22/23',
        imagem: 'https://fake-api-tau.vercel.app/ebac_sports/internacional.webp',
        preco: 249.9
    },
    {
        id: 5,
        nome: 'Patins Preto',
        imagem: 'https://fake-api-tau.vercel.app/ebac_sports/patins.webp',
        preco: 399.9
    },
    {
        id: 6, 
        nome: 'Camisa Kansas City Chiefs',
        imagem: 'https://fake-api-tau.vercel.app/ebac_sports/camisa_kansas.webp',
        preco: 379.9
    },
    {
        id: 7,
        nome: 'Camisa Real Madrid 1 - 22/23',
        imagem: 'https://fake-api-tau.vercel.app/ebac_sports/real_madrid.webp',
        preco: 349.9
    },
    {
        id: 8,
        nome: 'Camisa Milan 1 - 22/23',
        imagem: 'https://fake-api-tau.vercel.app/ebac_sports/milan.webp',
        preco: 349.9
    },
  ])
}
