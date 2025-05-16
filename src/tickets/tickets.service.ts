import { Injectable } from '@nestjs/common';

@Injectable()
export class TicketsService {

    private tickets: {id: number, price: number, boughtAt: Date}[] = [];

    findAll() {
        return this.tickets;
    }

    createTicket(price: number) {
        const newTicket = {
            id: this.tickets.length + 1,
            price: price,
            boughtAt: new Date(),
        } 

        this.tickets.push(newTicket);

        return newTicket;
    }

    deleteTicket(minutes: number) {
        let deletedCount = 0;
        this.tickets = this.tickets.filter(ticket => {
            // encontrar los tickets que fueron comprados hace más de 2 minutos
            // y eliminarlos
            const now = new Date();
            const twoMinutesAgo = new Date(now.getTime() - minutes * 60 * 1000);

            if (ticket.boughtAt < twoMinutesAgo) {
                deletedCount++;
                return false; // filter out the expired ticket
            }

            return ticket.boughtAt > twoMinutesAgo;
        });

        return deletedCount;
    }
}
