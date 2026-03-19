import Payment from "../models/Payment.js";
import type { Request, Response } from "express";

export const getPayments = async (req: Request, res: Response) => {
    try {
        const payments = await Payment.find().populate('student', 'name');
        res.json(payments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
export const createPayment = async (req: Request, res: Response) => {
    try {
        const payment = await Payment.create(req.body);
        res.status(201).json(payment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
export const deletePayment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const payment = await Payment.findByIdAndDelete(id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.json({ message: 'Payment deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
export const updatePayment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const payment = await Payment.findByIdAndUpdate(id, req.body, { new: true });
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.json(payment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};