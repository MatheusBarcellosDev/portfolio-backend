const nodemailer = require("nodemailer");

const SMTP_CONFIG = require("../config/smtp");

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

const sendEmailAproveComent = (toClient, name) => {
    const mainSent = transporter.sendMail({
        html: `
        <div
            style="
                background-color: #222222;
                color: #fff;
                padding: 20px;
                border-radius: 5px;
                border: 1px solid #e3e3e3;
                margin: 20px;
                font-family: sans-serif;
            "
        >
        <center>
            <img src="https://media.giphy.com/media/4Z3DdOZRTcXPa/giphy.gif" 
                alt="gif" 
                border="0" 
                width="400" 
                height="200"
            >
            <h2
                style="
                    font-family: 'Arial';
                    font-size: 20px;
                    font-weight: bold;
                "
            >Olá ${name} 👋</h2> 
            <h3>Seu comentário foi aprovado! ✅</h3>
            <p
                style="
                    font-family: 'Arial';
                    font-size: 15px;
                    font-weight: bold;
                "
            >🔔Não se esqueça de voltar a página para verificar.🔔</p>
            <p
                style="
                    font-family: 'Arial';
                    font-size: 15px;
                    font-weight: bold;
                "
            >Muito Obrigado!</p>
            <button
                style="
                    background-color: #007CED;
                    border: none;
                    color: white;
                    padding: 6px 14px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;
                    cursor: pointer;
                    border-radius: 8px;
                    text-decoration: none;
                    cursor: pointer;
                "
            >
                <a 
                    style="
                        color: white;
                        text-decoration: none;
                    "
                href="https://matheusbarcellos.herokuapp.com/">
                    <p
                        style="
                            font-family: 'Arial';
                            font-size: 15px;
                            font-weight: bold;
                        "
                    >Voltar a página</p>
                </a>
            </button>
            <p>Matheus Barcellos</p>
        </center>
        </div>
        `,
        subject: "Comentário Aprovado!",
        from: "Matheus Barcellos <matheusbarcellosdev@gmail.com",
        to: `${toClient}`,
    });
};

const sendMailRejectComent = (toClient, name) => {
    const mainSent = transporter.sendMail({
        html: `
        <div
        style="
            background-color: #222222;
            color: #fff;
            padding: 20px;
            border-radius: 5px;
            border: 1px solid #e3e3e3;
            margin: 20px;
            font-family: sans-serif;
        "
    >
    <center>
        <img src="https://media.giphy.com/media/WTjnWYENpLxS8JQ5rz/giphy.gif" 
            alt="gif" 
            border="0" 
            width="400" 
            height="200"
        >
        <h2
            style="
                font-family: 'Arial';
                font-size: 20px;
                font-weight: bold;
            "
        >Olá ${name} 👋</h2> 
        <h3>Nós analisamos seu comentário e infelizmente não foi aprovado ❌</h3>
        <p
            style="
                font-family: 'Arial';
                font-size: 15px;
                font-weight: bold;
            "
        >🔔Não se esqueça de fazer um novo comentário.🔔</p>
        <p
            style="
                font-family: 'Arial';
                font-size: 15px;
                font-weight: bold;
            "
        >Muito Obrigado!</p>
        <button
            style="
                background-color: #007CED;
                border: none;
                color: white;
                padding: 6px 14px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
                border-radius: 8px;
                text-decoration: none;
                cursor: pointer;
            "
        >
            <a 
                style="
                    color: white;
                    text-decoration: none;
                "
            href="https://matheusbarcellos.herokuapp.com/">
                <p
                    style="
                        font-family: 'Arial';
                        font-size: 15px;
                        font-weight: bold;
                    "
                >Voltar a página</p>
            </a>
        </button>
        <p>Matheus Barcellos</p>
    </center>
    </div>
        `,
        subject: "Comentário Rejeitado!",
        from: "Matheus Barcellos <matheusbarcellosdev@gmail.com",
        to: `${toClient}`,
    });
};

const sendMailNewComent = () => {
    const mainSent = transporter.sendMail({
        text: `
            Olá, você tem um novo comentário!`,
        subject: "Novo Comentário!",
        from: "Matheus Barcellos Dev <matheusbarcellosdev@gmail.com",
        to: "matheusbarcellos61@gmail.com",
    });
};

module.exports = {
    sendEmailAproveComent,
    sendMailRejectComent,
    sendMailNewComent,
};
