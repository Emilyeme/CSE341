import express from "express";

import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} from "../controllers/contacts.js";

const router = express.Router();

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get all contacts
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: Successfully retrieved all contacts
 */
router.get("/", getAllContacts);

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Get one contact by ID
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB contact ID
 *     responses:
 *       200:
 *         description: Successfully retrieved contact
 *       404:
 *         description: Contact not found
 */
router.get("/:id", getContactById);

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a new contact
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - favoriteColor
 *               - birthday
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: Emily
 *               lastName:
 *                 type: string
 *                 example: Emerson
 *               email:
 *                 type: string
 *                 example: emily@example.com
 *               favoriteColor:
 *                 type: string
 *                 example: Blue
 *               birthday:
 *                 type: string
 *                 example: 2002-05-15
 *     responses:
 *       201:
 *         description: Contact created successfully
 *       400:
 *         description: All fields are required
 */
router.post("/", createContact);

/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: Update a contact
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB contact ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - favoriteColor
 *               - birthday
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: Emily
 *               lastName:
 *                 type: string
 *                 example: Emerson
 *               email:
 *                 type: string
 *                 example: emily@example.com
 *               favoriteColor:
 *                 type: string
 *                 example: Green
 *               birthday:
 *                 type: string
 *                 example: 2002-05-15
 *     responses:
 *       204:
 *         description: Contact updated successfully
 *       404:
 *         description: Contact not found
 */
router.put("/:id", updateContact);

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete a contact
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB contact ID
 *     responses:
 *       204:
 *         description: Contact deleted successfully
 *       404:
 *         description: Contact not found
 */
router.delete("/:id", deleteContact);

export default router;