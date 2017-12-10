
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategory } from './KalturaCategory';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'category' action 'get'.
 *
 * Usage: Get Category by id
 *
 * Server response type:         KalturaCategory
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryGetAction extends KalturaRequest<KalturaCategory> {

    id : number;

    constructor(data : CategoryGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategory', responseConstructor : KalturaCategory  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'category' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

