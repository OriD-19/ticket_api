import { Injectable } from '@nestjs/common';
@Injectable()
export class EventosService {
  private users = [{ idUser: 1, 
    nombre: 'Fernando', 
    idEvento: 1, 
    ticket: 11252025, 
    asistencia: false }];
    
  private eventos = [{ idEvento: 1, nombre: 'Subasta', fecha: '2023-10-01'}];
  summaryAssistance (){
    const presentes = this.users.filter(user => user.asistencia === true);
    const ausentes = this.users.filter(user => user.asistencia === false);
    return {
      presentes: presentes,
      ausentes: ausentes
    }
  }

  updateAssistance(nombre: string, ticket: string){
    const user = this.users.find((usuario) => usuario.nombre===nombre && usuario.ticket===ticket);
    if(user){
      user.asistencia = true;
      return {
        message: 'Asistencia registrada',
        user: user
      }
  }else{
        return {
          message: 'Usuario o ticket no encontrado',
        }
    }
}
registerUser(nombre: string, evento: string){
  const eventoEncontrado = this.eventos.find((e) => e.nombre === evento);
  if(!eventoEncontrado){
    return {
      message: 'Ese evento no existe',
    }
  }else{
    const ticket = `${this.users.length + 1}${new Date().toLocaleDateString('es-ES').replace(/\//g, '')}`;
      const newUser = {idUser: this.users.length+1, nombre: nombre, idEvento: eventoEncontrado.idEvento, ticket: ticket, asistencia: false};
      this.users.push(newUser);
      return {
        message: 'Usuario registrado', 
        user: newUser
      }
  }
}

}

