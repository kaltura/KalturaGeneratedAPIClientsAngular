
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerCatalogItemDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'PartnerCatalogItem' action 'delete'.
 *
 * Usage: Remove existing catalogItem from specific account
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class PartnerCatalogItemDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : PartnerCatalogItemDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_partnercatalogitem' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

