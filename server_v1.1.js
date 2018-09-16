const express = require('express');
const app = express();
const port = 8081;
var fs = require("fs");

function readJsonFileSync(filepath) {
    var file = fs.readFileSync(filepath, 'utf8');
    return JSON.parse(file);
};


// For correct work with CORS

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});


// /sciences/

get_sciences = readJsonFileSync('./JSON/GET.sciences.json');
post_sciences = readJsonFileSync('./JSON/POST.sciences.json');

app.route('/sciences/')
  .get(function(req, res) {
		res.json(get_sciences);
		console.log('get-sciences');
	})
	.post(function(req, res) {		
		res.json(post_sciences);
		console.log('post-sciences');
	});


// /sciences/{id}/

get_sciences_1 = readJsonFileSync('./JSON/GET.sciences.1.json');
put_req_sciences_1 = readJsonFileSync('./JSON/PUT.req.sciences.1.json');
put_res_sciences_1 = readJsonFileSync('./JSON/PUT.res.sciences.1.json');

app.route('/sciences/1/edit')
  .get(function(req, res) {
		res.json(get_sciences_1);
		console.log('get-sciences-1');
	})
	.put(function(req, res) {		
		req.json(put_req_sciences_1);		
		res.json(put_res_sciences_1);
		console.log('put-sciences-1');
	})
	.delete(function(req, res) {
		res.json({});		
		console.log('delete-sciences-1');
	});


// /lessons/

post_lessons = readJsonFileSync('./JSON/POST.lessons.json');

app.route('/lessons/')
  .post(function(req, res) {
		res.json(post_lessons);
		console.log('post-lessons');
	});


// /lessons/{id}/

get_lessons_1 = readJsonFileSync('./JSON/GET.lessons.1.json');
put_req_lessons_1 = readJsonFileSync('./JSON/PUT.req.lessons.1.json');
put_res_lessons_1 = readJsonFileSync('./JSON/PUT.res.lessons.1.json');

app.route('/lessons/1/')
  .get(function(req, res) {
		res.json(get_lessons_1);
		console.log('get-lessons-1');
	})
	.put(function(req, res) {
		req.json(put_req_lessons_1);		
		res.json(put_res_lessons_1);
		console.log('put-lessons-1');
	})
	.delete(function(req, res) {
		res.json({});		
		console.log('delete-lessons-1');
	});


// /lessons/upload_image/

post_req_lessons_ui = readJsonFileSync('./JSON/POST.req.lessons.upload_image.json');
post_res_lessons_ui = readJsonFileSync('./JSON/POST.res.lessons.upload_image.json');

app.route('/lessons/upload_image/')
	.post(function(req, res) {
		req.json(post_req_lessons_ui);		
		res.json(post_res_lessons_ui);
		console.log('post-lessons-upload_image');
	});


// /cards/

post_cards = readJsonFileSync('./JSON/POST.cards.json');

app.route('/cards/')
  .post(function(req, res) {
		res.json(post_cards);
		console.log('post-cards');
	});


// /cards/{id}/

get_cards_1 = readJsonFileSync('./JSON/GET.cards.1.json');
put_req_cards_1 = readJsonFileSync('./JSON/PUT.req.cards.1.json');
put_res_cards_1 = readJsonFileSync('./JSON/PUT.res.cards.1.json');

app.route('/cards/1/')
  .get(function(req, res) {
		res.json(get_cards_1);
		console.log('get-cards-1');
	})
	.put(function(req, res) {
		req.json(put_req_cards_1);		
		res.json(put_res_cards_1);
		console.log('put-cards-1');
	})
	.delete(function(req, res) {
		res.json({});		
		console.log('delete-cards-1');
	});


// /nodes/

post_nodes = readJsonFileSync('./JSON/POST.nodes.json');

app.route('/nodes/')
  .post(function(req, res) {
		res.json(post_nodes);
		console.log('post-nodes');
	});


// /nodes/{id}/

get_nodes_1 = readJsonFileSync('./JSON/GET.nodes.1.json');
put_req_nodes_1 = readJsonFileSync('./JSON/PUT.req.nodes.1.json');
put_res_nodes_1 = readJsonFileSync('./JSON/PUT.res.nodes.1.json');

app.route('/nodes/1/')
  .get(function(req, res) {
		res.json(get_nodes_1);
		console.log('get-nodes-1');
	})
	.put(function(req, res) {
		req.json(put_req_nodes_1);		
		res.json(put_res_nodes_1);
		console.log('put-nodes-1');
	})
	.delete(function(req, res) {
		res.json({});		
		console.log('delete-nodes-1');
	});


// Server listening

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err)
    }
    console.log(`Server is listening on http://127.0.0.1:${port}`)
})

