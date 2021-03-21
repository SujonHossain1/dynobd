const cron = require('node-cron');
const Product = require('./models/Product');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.MAIL_KEY);

cron.schedule('59 * * * *', async () => {
    const stockLost = await Product.find({ stock: { $lt: 5 } });

    const emailData = {
        to: ["m.sujon.hossain1@gmail.com", 'sujon.hossain758@gmail.com'],
        from: {
            name: 'Techdyno BD',
            email: process.env.EMAIL_FROM
        },
        subject: 'Product Stock Low',
        html: `
        <div style="font-family: sans-serif; background: salmon; padding: 20px;">
             <h2>Lowest Stock of Products </h2>
            ${stockLost.map((item) =>
            `
              <div style="display: flex;line-height: 14px;justify-content: space-around;align-items: center;margin-bottom: 13px;background: #fafafa;border-radius: 10px; padding: 15px">
                    <div>
                        <h3 style="margin-bottom:8px ;"> ${item.title} </h3>
                        <p style="margin-bottom:0"> stock: <strong style="color: red"> ${item.stock} </strong> </p>
                        <p style="margin-bottom:0"> Price: <strong style="color: green"> Tk. ${item.price} </strong> </p>
                    </div>
                    <div>
                        <img style="max-width:150px" src="http://localhost:4000/${item.image1}" alt="">
                    </div>
                </div>
            `
        )}
            <a href="https://www.techdynobd.com/" style="font-size: 19px; text-decoration: none; margin-top: 25px; display: block;"> &copy; Techdyno BD</a>
        </div>
      `
    }
    // sgMail.send(emailData)
    //     .then(res => console.log(`Email has been sent to "m.sujon.hossain1@gmail.com"`))
    //     .catch(err => console.error(err));

    console.log('running a task every minute');
});