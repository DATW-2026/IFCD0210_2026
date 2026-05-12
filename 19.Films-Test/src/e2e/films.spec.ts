import type { Express } from "express";
import request from 'supertest';
import { env } from '../config/env.ts';
import { seed } from '../config/db-test.seed.ts';
import { connectDB } from '../config/db-config.ts';
import { createApp } from '../app.ts';

describe('Given routes Films', () => {

    let app: Express;
    const urlBase = '/api/films'
    beforeEach(async () => {
        const prisma = await connectDB();
        app = createApp(prisma);
        await seed();
    })


    test('Valid DB in environment', () => {
        expect(env.PGDATABASE).toBe('films_db_test')
    })

    test('[GET] /api/films', async () => {
        const response = await request(app).get(urlBase).expect(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBe(3);
    });

    test('[GET] /api/films/1', async () => {
        const response = await request(app).get(urlBase + '/1').expect(200);
        expect(response.body.id).toBe(1)
    });

    test('[GET] /api/films/100', async () => {
        await request(app).get(urlBase + '/100').expect(404);
    });

    test('[POST] /api/films', async () => {


        
        const response = await request(app)
        .post(urlBase)
        .send({})
        .expect(201);
        expect(response.body).toBeInstanceOf(Array);
        //expect(response.body.length).toBe(3);
    });

} )

