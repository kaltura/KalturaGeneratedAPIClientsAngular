
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderActionUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	genericDistributionProviderAction : KalturaGenericDistributionProviderAction;
}

/**
 * Build request payload for service 'genericDistributionProviderAction' action 'update'.
 *
 * Usage: Update Generic Distribution Provider Action by id
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GenericDistributionProviderActionUpdateAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {

    id : number;
	genericDistributionProviderAction : KalturaGenericDistributionProviderAction;

    constructor(data : GenericDistributionProviderActionUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				genericDistributionProviderAction : { type : 'o', subTypeConstructor : KalturaGenericDistributionProviderAction, subType : 'KalturaGenericDistributionProviderAction' }
            }
        );
        return result;
    }
}

