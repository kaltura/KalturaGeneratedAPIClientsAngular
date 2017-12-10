
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaGenericDataCenterContentResource } from './KalturaGenericDataCenterContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DataAddContentActionArgs  extends KalturaRequestArgs {
    entryId : string;
	resource : KalturaGenericDataCenterContentResource;
}

/**
 * Build request payload for service 'data' action 'addContent'.
 *
 * Usage: Update the dataContent of data entry using a resource
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DataAddContentAction extends KalturaRequest<string> {

    entryId : string;
	resource : KalturaGenericDataCenterContentResource;

    constructor(data : DataAddContentActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'data' },
				action : { type : 'c', default : 'addContent' },
				entryId : { type : 's' },
				resource : { type : 'o', subTypeConstructor : KalturaGenericDataCenterContentResource, subType : 'KalturaGenericDataCenterContentResource' }
            }
        );
        return result;
    }
}

