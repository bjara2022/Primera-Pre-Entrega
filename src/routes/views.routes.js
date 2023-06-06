import { Router } from 'express';
import { productsService } from '../dao/products.service.js';


const viewsRouter = Router();

viewsRouter.get('/', async (req, res) => {
	try {
		const productsMdb = await productsService.getAllProductsMdb();
		res.render('products', {
			title: 'Lista de Productos',
			productsMdb: productsMdb,
		});
	} catch (err) {
		res.status(500).send({ err });
	}
});

viewsRouter.get('/realtimeproducts', async (req, res) => {
	try {
		res.render('realTimeProducts', {
			title: 'Productos en tiempo real',
		});
	} catch (err) {
		res.status(500).send({ err });
	}
});


export default viewsRouter;