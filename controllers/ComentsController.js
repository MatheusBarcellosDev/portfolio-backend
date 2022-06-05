const { Comentario } = require('../models');
const { sendEmailAproveComent, sendMailRejectComent, sendMailNewComent } = require('../nodemailer/nodemailer');

const createComents = async (req, res) => {
    try {
        const {name, email, message} = req.body;
        const comentario = await Comentario.create({
            name,
            email,
            message
        });

        sendMailNewComent();

        return res.status(201).json({
            comentario
        });
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
};

const getAllComents = async (req, res) => {
    try {
        const comentarios = await Comentario.findAll();

        if(!comentarios) {
            return res.status(404).json({
                error: 'Nenhum comentário encontrado'
            });
        }

        return res.status(200).json({
            comentarios
        });



    } catch (error) {
        return res.status(400).json({
            error: error.message
        });

    }
};

const deleteComents = async (req, res) => {
    try {
        const { id } = req.params;
        const comentario = await Comentario.findByPk(id);

        if(!comentario) {
            return res.status(404).json({
                error: 'Comentário não encontrado'
            });
        }

        await comentario.destroy();

        sendMailRejectComent(comentario.email, comentario.name);

        return res.status(204).json();

    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}

const statusComents = async (req, res) => {
    try {
        const { id } = req.params

        const comentario = await Comentario.findByPk(id);

        if(!comentario) {
            return res.status(404).json({
                error: 'Comentário não encontrado'
            });
        }

        await comentario.update({
            status: !comentario.status
        });

        sendEmailAproveComent(comentario.email, comentario.name);

        return res.status(200).json({
            comentario
        });

    } catch (error) {
        return res.status(400).json({
            error: error.message
        });

    }
}


module.exports = {
    createComents,
    getAllComents,
    deleteComents,
    statusComents
};