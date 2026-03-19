import AssetAllocation from "../models/AssetAllocation.js";
import type { NextFunction, Request, Response } from "express";

export const getAllAssetAllocations = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const assetAllocations = await AssetAllocation.find().populate('asset').populate('allocatedTo');
        res.status(200).json(assetAllocations);
    } catch (error) {
        next(error);
    }
};
export const getAssetAllocationById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const assetAllocation = await AssetAllocation.findById(id).populate('asset').populate('allocatedTo');
        if (!assetAllocation) {
            return res.status(404).json({ message: 'Asset allocation not found' });
        }
        res.status(200).json(assetAllocation);
    } catch (error) {
        next(error);
    }
};
export const createAssetAllocation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const assetAllocation = new AssetAllocation(req.body);
        const savedAssetAllocation = await assetAllocation.save();
        res.status(201).json(savedAssetAllocation);
    } catch (error) {
        next(error);
    }
};

export const updateAssetAllocation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const assetAllocation = await AssetAllocation.findByIdAndUpdate(id, req.body, { new: true }).populate('asset').populate('allocatedTo');
        if (!assetAllocation) {
            return res.status(404).json({ message: 'Asset allocation not found' });
        }
        res.status(200).json(assetAllocation);
    } catch (error) {
        next(error);
    }
};
export const deleteAssetAllocation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const assetAllocation = await AssetAllocation.findByIdAndDelete(id);
        if (!assetAllocation) {
            return res.status(404).json({ message: 'Asset allocation not found' });
        }
        res.status(200).json({ message: 'Asset allocation deleted successfully' });
    } catch (error) {
        next(error);
    }
};
export const getAssetAllocationByAsset = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { assetId } = req.params;
        const assetAllocations = await AssetAllocation.find({ asset: assetId }).populate('asset').populate('allocatedTo');
        res.status(200).json(assetAllocations);
    } catch (error) {
        next(error);
    }
};
export const getAssetAllocationByAllocatedTo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { allocatedToId } = req.params;
        const assetAllocations = await AssetAllocation.find({ allocatedTo: allocatedToId }).populate('asset').populate('allocatedTo');
        res.status(200).json(assetAllocations);
    } catch (error) {
        next(error);
    }
};
export const getAssetAllocationByDate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { date } = req.params;
        const assetAllocations = await AssetAllocation.find({ allocationDate: date }).populate('asset').populate('allocatedTo');
        res.status(200).json(assetAllocations);
    } catch (error) {
        next(error);
    }
};
export const getAssetAllocationByStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { status } = req.params;
        const assetAllocations = await AssetAllocation.find({ status: status }).populate('asset').populate('allocatedTo');
        res.status(200).json(assetAllocations);
    } catch (error) {
        next(error);
    }
};
export const getAssetAllocationByLocation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { location } = req.params;
        const assetAllocations = await AssetAllocation.find({ location: location }).populate('asset').populate('allocatedTo');
        res.status(200).json(assetAllocations);
    } catch (error) {
        next(error);
    }
};
