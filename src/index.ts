// tslint:disable:max-classes-per-file

/**
 * TTTS API Service Library for Javascript
 * @ignore
 */

import * as factory from '@motionpicture/ttts-factory';

import { AuthClient } from './auth/authClient';

import { AdminService } from './service/admin';
import { EventService } from './service/event';
import { OrderService } from './service/order';
import { OrganizationService } from './service/organization';
import { ReservationService } from './service/reservation';
import { PlaceOrderTransactionService } from './service/transaction/placeOrder';
import { ReturnOrderTransactionService } from './service/transaction/returnOrder';
import * as transporters from './transporters';

export import factory = factory;
export import transporters = transporters;

/**
 * auth client abstract class
 * 認証クライアント抽象クラス
 * @export
 * @class
 * @abstract
 */
export abstract class Auth extends AuthClient { }

export namespace service {
    /**
     * 管理者サービス
     * @class
     */
    export class Admin extends AdminService { }
    /**
     * event service
     * @class
     */
    export class Event extends EventService { }
    /**
     * 注文サービス
     * @class
     */
    export class Order extends OrderService { }
    /**
     * 組織サービス
     * @class
     */
    export class Organization extends OrganizationService { }
    /**
     * 予約サービス
     * @class
     */
    export class Reservation extends ReservationService { }
    export namespace transaction {
        /**
         * 注文取引サービス
         * @class
         */
        export class PlaceOrder extends PlaceOrderTransactionService { }
        /**
         * 返品取引サービス
         * @class
         */
        export class ReturnOrder extends ReturnOrderTransactionService { }
    }
}
