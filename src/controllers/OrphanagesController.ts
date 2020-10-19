import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';


export default {
    async create(request: { body: { name: any; latitude: any; longitude: any; about: any; instructions: any; opening_hours: any; open_on_weekends: any; }; }, response: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: Orphanage): any; new(): any; }; }; }) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = request.body;
    
        const orphanagesRepository = getRepository(Orphanage);
    
        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        });
    
        await orphanagesRepository.save(orphanage);
    
        return response.status(201).json(orphanage);
    }
};