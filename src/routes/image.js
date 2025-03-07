import express from "express";
import {
  getImages,
  searchImages,
  getImageDetails,
  getComments,
  checkSavedImage,
  addComment,
} from "../controllers/imageController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

/**
 * @swagger
 * /api/images:
 *   get:
 *     summary: Get all images
 *     tags: [Images]
 *     responses:
 *       200:
 *         description: List of images
 *       500:
 *         description: Server error
 */
router.get("/", getImages);

/**
 * @swagger
 * /api/images/search:
 *   get:
 *     summary: Search images by title
 *     tags: [Images]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching images
 *       500:
 *         description: Server error
 */
router.get("/search", searchImages);

/**
 * @swagger
 * /api/images/{id}:
 *   get:
 *     summary: Get image details by ID
 *     tags: [Images]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Image ID
 *     responses:
 *       200:
 *         description: Image details
 *       404:
 *         description: Image not found
 */
router.get("/:id", getImageDetails);

/**
 * @swagger
 * /api/images/{id}/comments:
 *   get:
 *     summary: Get comments for an image
 *     tags: [Images]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Image ID
 *     responses:
 *       200:
 *         description: List of comments
 *       500:
 *         description: Server error
 */
router.get("/:id/comments", getComments);

/**
 * @swagger
 * /api/images/{id}/saved:
 *   get:
 *     summary: Check if an image is saved by the user
 *     tags: [Images]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Image ID
 *     responses:
 *       200:
 *         description: Saved status
 *       500:
 *         description: Server error
 */
router.get("/:id/saved", authMiddleware, checkSavedImage);

/**
 * @swagger
 * /api/images/{id}/comments:
 *   post:
 *     summary: Add a comment to an image
 *     tags: [Images]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Image ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *             required:
 *               - content
 *     responses:
 *       201:
 *         description: Comment added
 *       400:
 *         description: Bad request
 */
router.post("/:id/comments", authMiddleware, addComment);

export default router;
