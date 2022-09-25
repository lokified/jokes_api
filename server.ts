import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient()

//get all jokes
app.get('/', async (req: Request, res: Response) => {
    
    const jokes = await prisma.joke.findMany({
        include: {
            creator: true
        }
    })

    res.json({ jokes });
})

//create a joke
app.post('/', async (req: Request, res: Response) => {
    const joke = await prisma.joke.create({
      data: {
        text: "there is no a jooke to jog",
        userId: "cl8h3tks20091r9d3p8jddq30",
      },
    });

    res.json({joke})
})

//get a single joke
app.get("/:jokeId", (req: Request, res: Response) => {
  res.json({
    message: "hi there helooooo",
  });
});

//delete a single joke
app.delete("/:jokeId", (req: Request, res: Response) => {
  res.json({
    message: "hi there helooooo",
  });
});


app.listen(30001, () => {
    console.log("server running on http://localhost:30001/")
})