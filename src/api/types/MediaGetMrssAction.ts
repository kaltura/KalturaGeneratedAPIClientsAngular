
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaExtendingItemMrssParameter } from './KalturaExtendingItemMrssParameter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaGetMrssActionArgs  extends KalturaRequestArgs {
    entryId : string;
	extendingItemsArray? : KalturaExtendingItemMrssParameter[];
	features? : string;
}

/**
 * Build request payload for service 'media' action 'getMrss'.
 *
 * Usage: Get MRSS by entry id
 * XML will return as an escaped string
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaGetMrssAction extends KalturaRequest<string> {

    entryId : string;
	extendingItemsArray : KalturaExtendingItemMrssParameter[];
	features : string;

    constructor(data : MediaGetMrssActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
        if (typeof this.extendingItemsArray === 'undefined') this.extendingItemsArray = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'getMrss' },
				entryId : { type : 's' },
				extendingItemsArray : { type : 'a', subTypeConstructor : KalturaExtendingItemMrssParameter, subType : 'KalturaExtendingItemMrssParameter' },
				features : { type : 's' }
            }
        );
        return result;
    }
}

