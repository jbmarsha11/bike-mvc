const Bike = require('../models/Bike')

module.exports = {
    getBike: async (req,res)=>{
        console.log(req.user)
        try{
            const bike = await Bike.findById(req.params.id);
            res.render("bike.ejs", { bike: bike, user: req.user });
        }catch(err){
            console.log(err)
        }
    },
    createBike: async (req, res)=>{
        try{
            await Bike.create({
                brand: req.body.brand,
                model: req.body.model,
                frameMaterial: req.body.frameMaterial,
                wheelSize: req.body.wheelSize,
                frontTravel: req.body.frontTravel,
                rearTravel: req.body.rearTravel,
                weight: req.body.weight,
                headTubeAngle: req.body.headTubeAngle,
                price: req.body.price,
                user: req.user.id,
              });
        }catch(err){
            console.log(err)
        }
    },
     
    //should not need to mark anything complete or incomplete

    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    deleteBike: async (req, res)=>{
        console.log(req.body.bikeIdFromJSFile)
        try{
            await Bike.findOneAndDelete({_id:req.body.bikeIdFromJSFile})
            console.log('Deleted Bike')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    