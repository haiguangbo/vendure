import { InjectableStrategy } from '../../common/types/injectable-strategy';
import { OrderLine } from '../../entity/order-line/order-line.entity';
import { Order } from '../../entity/order/order.entity';

/**
 * @description
 * An OrderMergeStrategy defines what happens when a Customer with an existing Order
 * signs in with a guest Order, where both Orders may contain differing OrderLines.
 *
 * Somehow these differing OrderLines need to be reconciled into a single collection
 * of OrderLines. The OrderMergeStrategy defines the rules governing this reconciliation.
 *
 * @docsCategory orders
 */
export interface OrderMergeStrategy extends InjectableStrategy {
    /**
     * @description
     * Merges the lines of the guest Order with those of the existing Order which is associated
     * with the active customer.
     */
    merge(guestOrder: Order, existingOrder: Order): OrderLine[];
}
