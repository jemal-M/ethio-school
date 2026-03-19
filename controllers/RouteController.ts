import Route from "../models/Route.js";
import type { Request,Response } from "express";

export const getRoutes = async (req:Request,res:Response) => {
    try {
        const routes = await Route.find();
        res.json(routes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
export const createRoute = async (req:Request, res:Response) => {
    try {
        const route = await Route.create(req.body);
        res.status(201).json(route);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
export const deleteRoute = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const route = await Route.findByIdAndDelete(id);
        if (!route) {
            return res.status(404).json({ message: 'Route not found' });
        }
        res.json({ message: 'Route deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
export const updateRoute = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const route = await Route.findByIdAndUpdate(id, req.body, { new: true });
        if (!route) {
            return res.status(404).json({ message: 'Route not found' });
        }
        res.json(route);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
export const getRouteById = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const route = await Route.findById(id);
        if (!route) {
            return res.status(404).json({ message: 'Route not found' });
        }
        res.json(route);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};