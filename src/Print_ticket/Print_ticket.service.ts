import { Injectable } from "@nestjs/common";
import * as PDFKit from 'pdfkit';
import { Response } from "express";

@Injectable()
export class TicketService {
    async generatePDF(data: any, res: Response) {
        const doc = new PDFKit();

        doc.pipe(res);

        doc.fontSize(20).text('TICKET DE COMPRA', { align: 'center' });
        doc.moveDown();

        doc.fontSize(12).text(`Fecha: ${new Date().toLocaleString()}`);
        doc.text(`Cliente: ${data.cliente}`);
        doc.text(`ID de compra: ${data.idCompra}`);
        doc.moveDown();

        doc.text('Detalle de productos:', { underline: true });
        data.productos.forEach((producto: any, index: number) => {
            doc.text(
                `${index + 1}. ${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${producto.precio}`,
            );
        });

        doc.moveDown();
        doc.text(`Total: $${data.total}`, { bold: true });

        doc.end();
    }
}