
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';

import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderActionGetByProviderIdActionArgs  extends KalturaRequestArgs {
    genericDistributionProviderId : number;
	actionType : KalturaDistributionAction;
}

/**
 * Build request payload for service 'genericDistributionProviderAction' action 'getByProviderId'.
 *
 * Usage: Get Generic Distribution Provider Action by provider id
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GenericDistributionProviderActionGetByProviderIdAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {

    genericDistributionProviderId : number;
	actionType : KalturaDistributionAction;

    constructor(data : GenericDistributionProviderActionGetByProviderIdActionArgs)
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
				action : { type : 'c', default : 'getByProviderId' },
				genericDistributionProviderId : { type : 'n' },
				actionType : { type : 'en', subTypeConstructor : KalturaDistributionAction, subType : 'KalturaDistributionAction' }
            }
        );
        return result;
    }
}

