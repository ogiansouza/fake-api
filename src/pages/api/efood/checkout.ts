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
  const randomId = parseInt((Math.random() * 100).toFixed(), 10);
  const payload = {
    products: [
      {
        id: 1,
        price: 0,
      }
    ],
    delivery: {
      receiver: "string",
      address: {
        description: "string",
        city: "string",
        zipCode: "string",
        number: 12,
        complement: "string",
      }
    },
    payment: {
      card: {
        name: "string",
        number: "string",
        code: 123,
        expires: {
          month: 12,
          year: 1234,
        },
      },
    },
  };
  await runMiddleware(req, res, cors)

  if (req.method === 'GET') {
    res.status(200).json({
      ...payload,
    })
  } else if (req.method === 'POST') {
    if (validate(req.body, res)) {
      res.status(201).json({
        orderId: `#256${randomId}`
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
