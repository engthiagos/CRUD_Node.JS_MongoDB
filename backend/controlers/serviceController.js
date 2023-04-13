const { Service: ServiceModel } = require('../models/service');
const serviceController = {
    // create data on mongoDB                
    Create: async( req, res ) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            };
        const response = await ServiceModel.create(service);
        // messeage to frontend
        return res.status(201).json({response, msg:'Serviço criado com sucesso!'});           // resposta de funciondo
        } catch (error) {
            console.log(error.name);
            return res.status(500).json(error);                                               // resposta de quebra 
        }
    },
    // Read all data on mongoDB
    // ReadAll: async (req, res) => {
    //     try {
    //         const services = await ServiceModel.find();
    //         res.json(services);
    //     } catch (error) {
    //         console.log(error.name);
    //     }
    // },
    // Read individual data on mongoDB
    Read: async (req, res) => {
        try {
            const idDB = req.params.id
            const service = await ServiceModel.findById(idDB)
            if (!service){
                return res.status(404).json({msg: "Id não encontrado"})
            }
            return res.json(service)
        } catch (error) {
            console.log(error.name)
            return res.status(500).json(error)
        }
    },
    // Delete data on mongoDB
    Delete: async (req, res) => {
        try {   
            const idDB = await req.params.id;
            const deleteServer = await ServiceModel.findByIdAndDelete(idDB)
            res
            .status(200)
            .json({deleteServer, msg:'Serviço excluído com sucesso!'});

        } catch (error) {
            idDB = req.params._id;
            service = await ServiceModel.findById(idDB)
            if (!service){
                res.status(404).json({msg: "Id não encontrado"})
                return;
            }
            console.log(error);
        }
    },
    Update: async (req, res) => {
        try {
            const idDB = {_id: req.params.id}
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            };
            const updateServer = await ServiceModel.updateOne(idDB, service);
            if (updateServer.modifiedCount === 1) {
                return res.status(200).json({updateServer, msg:'Serviço atualizado com sucesso!'});
            }
            return res.status(404).json({msg:'Id não encontrado'});

        } catch (error) {
            idDB = req.params._id;
            service = await ServiceModel.findById(idDB)
            if (!service){
                res
                    .status(404)
                    .json({msg: "Id não encontrado"})
                return;
            }
            console.log(error);
        }
    }
}
module.exports = serviceController;