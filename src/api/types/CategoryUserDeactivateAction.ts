
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUser } from './KalturaCategoryUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryUserDeactivateActionArgs  extends KalturaRequestArgs {
    categoryId : number;
	userId : string;
}

/**
 * Build request payload for service 'categoryUser' action 'deactivate'.
 *
 * Usage: reject CategoryUser
 *
 * Server response type:         KalturaCategoryUser
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryUserDeactivateAction extends KalturaRequest<KalturaCategoryUser> {

    categoryId : number;
	userId : string;

    constructor(data : CategoryUserDeactivateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategoryUser', responseConstructor : KalturaCategoryUser  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categoryuser' },
				action : { type : 'c', default : 'deactivate' },
				categoryId : { type : 'n' },
				userId : { type : 's' }
            }
        );
        return result;
    }
}

