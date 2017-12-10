
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderActionAddActionArgs  extends KalturaRequestArgs {
    genericDistributionProviderAction : KalturaGenericDistributionProviderAction;
}

/**
 * Build request payload for service 'genericDistributionProviderAction' action 'add'.
 *
 * Usage: Add new Generic Distribution Provider Action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GenericDistributionProviderActionAddAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {

    genericDistributionProviderAction : KalturaGenericDistributionProviderAction;

    constructor(data : GenericDistributionProviderActionAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGenericDistributionProviderAction', responseConstructor : KalturaGenericDistributionProviderAction  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'contentdistribution_genericdistributionprovideraction' },
				action : { type : 'c', default : 'add' },
				genericDistributionProviderAction : { type : 'o', subTypeConstructor : KalturaGenericDistributionProviderAction, subType : 'KalturaGenericDistributionProviderAction' }
            }
        );
        return result;
    }
}

