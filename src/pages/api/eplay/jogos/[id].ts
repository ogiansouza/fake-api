
import { jogos } from '@/mocks/jogos'

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
  res: NextApiResponse<any>
) {
  await runMiddleware(req, res, cors)

  const jogo = jogos.find(x => x.id.toString() === req.query.id)

  if (jogo) {
    res.status(200).json(jogo)
  } else {
    res.status(404).json({
      message: "Item não encontrado"
    })
  }
}