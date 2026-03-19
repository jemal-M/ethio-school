import InventoryItem from "../models/InventoryItem.js";
import type { Request, Response } from "express";
export const getAllInventoryItems = async (req: Request, res: Response) => {
  try {
    const items = await InventoryItem.find();
    res.json(items);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getInventoryItemById = async (req: Request, res: Response) => {
  try {
    const item = await InventoryItem.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Inventory item not found" });
    }
    res.json(item);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const createInventoryItem = async (req: Request, res: Response) => {
  try {
    const item = new InventoryItem(req.body);
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};
export const updateInventoryItem = async (req: Request, res: Response) => {
  try {
    const item = await InventoryItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!item) {
      return res.status(404).json({ message: "Inventory item not found" });
    }
    res.json(item);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteInventoryItem = async (req: Request, res: Response) => {
  try {
    const item = await InventoryItem.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Inventory item not found" });
    }
    res.json({ message: "Inventory item deleted successfully" });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getInventoryItemByName = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const item = await InventoryItem.findOne({ name });
    if (!item) {
      return res.status(404).json({ message: "Inventory item not found" });
    }
    res.json(item);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getInventoryItemByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const items = await InventoryItem.find({ category });
    res.json(items);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getLowStockItems = async (req: Request, res: Response) => {
  try {
    const items = await InventoryItem.find({ stockQuantity: { $lt: 10 } });
    res.json(items);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
export const getInventoryItemsBySupplier = async (req: Request, res: Response) => {
  try {
    const { supplier } = req.params;
    const items = await InventoryItem.find({ supplier });
    res.json(items);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
