const app = require('express')();
const axios = require('axios');
const formData = require('express-form-data')


const PORT = 8080;

app.use(formData.parse())

//responds to axios request
app.post('https://imagehasbeenverified.example.endpoint', (req, res) => {
    res.status(200).send({message: 'Image posted'})
})

//receives client image data, uses axios to make endpoint call and responds success
app.post('/submitImageAPI', (req, res) => {
    const values = Object.values(req.values);

    // filter the values

    axios.post('https://imagehasbeenverified.example.endpoint', values)
      .then((response) => {
        console.log('AXIOS SUCCESS',response);
        res.status(200).send({message: 'Image submitted'})
      })
      .catch((error) => {
        console.log('AXIOS ERROR', error);
        res.status(500).send({message: 'Server error'})
      });
})

app.listen(PORT, () => console.log(`server is running, visit http://localhost:${PORT}`))