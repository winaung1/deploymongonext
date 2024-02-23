import connectMongo from "../../../lib/database/mongoose";
import Test from "../../../models/testModels";

export default async function addTest(req, res) {
    await connectMongo();
    const {method} = req

   if(method === 'GET'){
        try{
        const test = await Test.find();
        res.json({ test });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
   if(method === 'POST'){
        try{
        const {name, age, message} = req.body
        const test = await Test.create({name, age, message});
        res.json({ test });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
  }