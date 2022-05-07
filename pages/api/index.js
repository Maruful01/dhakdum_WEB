// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

  try {
    const result = await [{url: "JBsNG1M/slider-26march.jpg",
    _id: "3001" },
    {
      url: "static/media/Slider-3.0851ac33.jpg",
      _id: "3002"
    },
    {
      url: "static/media/Slider-2.0bf6a659.jpg",
      _id: "3003"
    }
  
    ];


    res.status(200).send( result )
    
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}
