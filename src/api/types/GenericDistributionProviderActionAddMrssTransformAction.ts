
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderActionAddMrssTransformActionArgs  extends KalturaRequestArgs {
    id : number;
	xslData : string;
}

/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addMrssTransform'.
 *
 * Usage: Add MRSS transform file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GenericDistributionProviderActionAddMrssTransformAction extends KalturaRequest<KalturaGenericDistributionProviderAction> {

    id : number;
	xslData : string;

    constructor(data : GenericDistributionProviderActionAddMrssTransformActionArgs)
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
				action : { type : 'c', default : 'addMrssTransform' },
				id : { type : 'n' },
				xslData : { type : 's' }
            }
        );
        return result;
    }
}

