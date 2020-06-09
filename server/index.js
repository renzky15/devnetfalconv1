const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb'}));
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");


app.get("/",(request, response) => {
    response.send('SendGrid Server.');
});
app.listen(4000, () => console.log('Running on port 4000'));

app.post('/send-email',(request, response)=>{
    // const{recipient,sender,subject,text} = request.query; 
    console.log(request.body);
    const data = request.body;


    const msg = {
        to: 'devnetfalcon@gmail.com',
        from: 'devnetfalcon@gmail.com',
        subject: data.Subject,
        html: data.Message + "<br /><br /> Message From: "+ data.Email,
      };
      console.log(msg);
      sgMail
      .send(msg)
      .then(() => {}, error => {
        console.error(error);
    
        if (error.response) {
          console.error(error.response.body)
        }
      });   
    response.json({
      status: 'success'
    });    
});

