import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {

    getMyFirstGet(): object {
        return{
        service: 'Blog Backend',
        controller: '/basics',
        function: 'Get Example'
        };
    }

    getConParametros(parametro: string): object {
        return{
        service: 'Blog Backend',
        controller: '/basics',
        function: 'Get Example',
        parametroRecibido: parametro
        };
    }

    postFunction(bodyPost: object): object {
        return{
            service: 'Blog Backend',
            controller: '/basics tipo post',
            function: 'Ejemplo de post',
            bodyRecibido: bodyPost
        };
    }

    putFunction(bodyPost: object, parametro: string): object {
        return{
            service: 'Blog Backend',
            controller: '/basics tipo put',
            function: 'Ejemplo de put',
            bodyRecibido: bodyPost,
            parametro: parametro
        };
    }

    deleteFunction(parametro: string): object {
        return{
            service: 'Blog Backend',
            controller: '/basics tipo delete',
            function: 'Ejemplo de put',
            parametro: parametro
        };
    }

}

