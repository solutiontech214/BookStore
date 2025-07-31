
import mongoose from "mongoose";
import BookDataModel from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const books = await BookDataModel.find(); // renamed to 'books' for clarity
    res.status(200).json(books);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Failed to fetch books", error });
  }
};
