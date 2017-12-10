
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProvider } from './KalturaGenericDistributionProvider';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'genericDistributionProvider' action 'get'.
 *
 * Usage: Get Generic Distribution Provider by id
 *
 * Server response type:         KalturaGenericDistributionProvider
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GenericDistributionProviderGetAction extends KalturaRequest<KalturaGenericDistributionProvider> {

    id : number;

    constructor(data : GenericDistributionProviderGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGenericDistributionProvider', responseConstructor : KalturaGenericDistributionProvider  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'contentdistribution_genericdistributionprovider' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

