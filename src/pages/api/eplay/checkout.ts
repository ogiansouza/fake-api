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

function validate(body: any, res: any) {
  if (!body) {
    return false
  } 

  let isValid = true;
  
  try {
    if (body.payment.card.active) {
      isValid = body.payment.card.number.length > 0
    }

    if (body.products.length === 0) {
      isValid = false
    }
  } catch(e) {
    return false
  }

  return isValid
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const randomId = parseInt((Math.random() * 10000).toFixed(), 10);
  const payload = {
    products: [
      {
        id: 1,
        price: 0,
      }
    ],
    billing: {
      name: "string",
      email: "string",
      document: "string",
    },
    delivery: {
      email: "string",
    },
    payment: {
      card: {
        active: true,
        owner: {
          name: "string",
          document: "string",
        },
        name: "string",
        number: "string",
        expires: {
          month: 12,
          year: 1234,
        },
        code: 123,
      },
      installments: 1,
    },
  };
  await runMiddleware(req, res, cors)

  if (req.method === 'GET') {
    res.status(200).json({
      ...payload
    })
  } else if (req.method === 'POST') {
    if (validate(req.body, res)) {
      res.status(201).json({
        orderId: `#100${randomId}`
      })
    } else {
      res.status(400).json({
        message: 'Reveja os dados enviados'
      })
    }
  } else {
    res.status(400).json({
      message: 'Método não implementado'
    })
  }
}
