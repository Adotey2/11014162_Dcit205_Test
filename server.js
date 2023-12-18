const express =require(express)
const app = express()


app.get('/', (req, res)=>{
res.send('Node API')
})

app.listen(1000,()=> {
    console.log('Node ApI is running on 3000')
})