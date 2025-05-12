const request = require('supertest');
const app = require('../app');


describe('API endpoints tests', () => {
    it('should return all the recipes', async () => {
        const resp = await request(app).get('/api/v1/recipes');
        expect(resp.statusCode).toEqual(200);
    });

    it('should return all the recipes with pagination and query', async () => {
        const resp = await request(app).get('/api/v1/recipes?page=1&offset=0&name=Samosa');
        expect(resp.statusCode).toEqual(200);
    });

    it('should return create a new recipe with valid payload', async () => {
        const recipe = {
            name: "Samosa",
            instructions: "Follow these",
            ingredients: "Add these",
            prepTime: "12 mins"
        };
        
        const resp = await request(app).post('/api/v1/recipes/create').send(recipe);
        expect(resp.statusCode).toEqual(200);
    });

    it('should return error while creating a new recipe with invalid payload', async () => {
        const recipe = {
            name: "Samosa",
            prepTime: "12 mins"
        };
        
        const resp = await request(app).post('/api/v1/recipes/create').send(recipe);
        expect(resp.statusCode).toEqual(422);
    });
});