import {Subject} from 'rxjs'

export class SubjectManager {
    subject$ = new Subject()

    /*
    mal
    get getSubject(){
        return this.subject$;
        // si lo hacemos de esta forma dejamos abierto para enviar y recibir información.
        // rompiendo el principio de encapculación por que podemos hacer al llamarlo
        // this.subject.next(true) //este .next es para enviar información.

    }
    */

    // bien
    getSubject(){
        return this.subject$.asObservable();
        /*
            entonces en donde invocamos si hacemos
            const unicast = this.subjectasObservable();
            unicast.   YA NO ME DA LA OPCIÓN DE NEXT
        */
    }

    setSubject(value){
        this.subject$.next(value);
    }

    // It is a good practice to add a "$" symbol to an any variable that is async.
}