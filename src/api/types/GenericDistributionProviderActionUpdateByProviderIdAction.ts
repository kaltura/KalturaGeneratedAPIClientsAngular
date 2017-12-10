
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';

import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderActionUpdateByProviderIdActionArgs  extends KalturaRequestArgs {
    genericDistributionProviderId : number;
	actionType : KalturaDistributionAction;
	genericDistributionProviderAction : KalturaGenericDistributionProviderAction;
}

/**
 * Build request payload for service 'genericDistributionProviderAction' action 'updateByProviderId'.
 *
 * Usage: Update Generic Distribution Provider Action by provider id
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GenericDistributionProviderActionUpdateByProviderIdAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {

    genericDistributionProviderId : number;
	actionType : KalturaDistributionAction;
	genericDistributionProviderAction : KalturaGenericDistributionProviderAction;

    constructor(data : GenericDistributionProviderActionUpdateByProviderIdActionArgs)
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
				action : { type : 'c', default : 'updateByProviderId' },
				genericDistributionProviderId : { type : 'n' },
				actionType : { type : 'en', subTypeConstructor : KalturaDistributionAction, subType : 'KalturaDistributionAction' },
				genericDistributionProviderAction : { type : 'o', subTypeConstructor : KalturaGenericDistributionProviderAction, subType : 'KalturaGenericDistributionProviderAction' }
            }
        );
        return result;
    }
}

