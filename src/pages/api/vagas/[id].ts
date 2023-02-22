import vagas from '@/mocks/vagas'
import Vaga from '@/models/Vaga'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Vaga>
) {
  const index = parseInt(req.query.id as string);
  res.status(200).json(vagas[index])
}
