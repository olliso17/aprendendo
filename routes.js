module.exports=app=>{
    
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/public/login/login.html')
    });
    app.get('/lembretes', function (req, res) {
        res.sendFile(__dirname + '/public/lembretes/lembretes.html')
    });
    app.get('/calendario', function (req, res) {
        res.sendFile(__dirname + '/public/calendario/janeiro.html')
    });
    app.get('/janeiro.html', function (req, res) {
        res.sendFile(__dirname + '/public/calendario/janeiro.html')
    });
    app.get('/fevereiro.html', function (req, res) {
        res.sendFile(__dirname + '/public/calendario/fevereiro.html')
    });
    app.get('/marco.html', function (req, res) {
        res.sendFile(__dirname + '/public/calendario/marco.html')
    });
    app.get('/abril.html', function (req, res) {
        res.sendFile(__dirname + '/public/calendario/abril.html')
    });
    app.get('/maio.html', function (req, res) {
        res.sendFile(__dirname + '/public/calendario/maio.html')
    });
    app.get('/junho.html', function (req, res) {
        res.sendFile(__dirname + '/public/calendario/junho.html')
    });
    app.get('/julho.html', function (req, res) {
        res.sendFile(__dirname + '/public/calendario/julho.html')
    });
    app.get('/agosto.html', function (req, res) {
        res.sendFile(__dirname + '/public/calendario/agosto.html')
    });
    app.get('/setembro.html', function (req, res) {
        res.sendFile(__dirname + '/public/calendario/setembro.html')
    });
    app.get('/outubro.html', function (req, res) {
        res.sendFile(__dirname + '/public/calendario/outubro.html')
    });
    app.get('/novembro.html', function (req, res) {
        res.sendFile(__dirname + '/public/calendario/novembro.html')
    });
    app.get('/dezembro.html', function (req, res) {
        res.sendFile(__dirname + '/public/calendario/dezembro.html')
    });

    app.post('/lembrestes', function(req, res){

        console.log('vc ta na rota de lembretes')
    })
}
