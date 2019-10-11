import * as factory from '@tokyotower/factory';
import { CREATED } from 'http-status';

import { Service } from '../../service';

/**
 * 確定結果インターフェース
 */
export interface IConfirmResult {
    id: string;
}

/**
 * 返品取引サービス
 */
export class ReturnOrderTransactionService extends Service {
    /**
     * 取引確定
     */
    public async confirm(params: {
        /**
         * 開演日(YYYYMMDD)
         */
        performanceDay: string;
        /**
         * 購入番号
         */
        paymentNo: string;
        /**
         * 手数料
         */
        cancellationFee: number;
        /**
         * 返品理由
         */
        reason: factory.transaction.returnOrder.Reason;
    }): Promise<IConfirmResult> {
        return this.fetch({
            uri: '/transactions/returnOrder/confirm',
            method: 'POST',
            expectedStatusCodes: [CREATED],
            body: {
                performance_day: params.performanceDay,
                payment_no: params.paymentNo,
                cancellation_fee: params.cancellationFee,
                reason: params.reason
            }
        })
            .then(async (response) => response.json());
    }

    /**
     * 確定した取引に関して、購入者にメール通知を送信する
     */
    public async sendEmailNotification(params: {
        /**
         * 取引ID
         */
        transactionId: string;
        /**
         * Eメールメッセージ属性
         */
        emailMessageAttributes: factory.creativeWork.message.email.IAttributes;
    }): Promise<factory.task.ITask<factory.cinerino.taskName.SendEmailMessage>> {
        return this.fetch({
            uri: `/transactions/returnOrder/${params.transactionId}/tasks/sendEmailNotification`,
            method: 'POST',
            expectedStatusCodes: [CREATED],
            body: params.emailMessageAttributes
        })
            .then(async (response) => response.json());
    }
}
