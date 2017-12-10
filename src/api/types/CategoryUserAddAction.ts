
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUser } from './KalturaCategoryUser';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryUserAddActionArgs  extends KalturaRequestArgs {
    categoryUser : KalturaCategoryUser;
}

/**
 * Build request payload for service 'categoryUser' action 'add'.
 *
 * Usage: Add new CategoryUser
 *
 * Server response type:         KalturaCategoryUser
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryUserAddAction extends KalturaRequest<KalturaCategoryUser> {

    categoryUser : KalturaCategoryUser;

    constructor(data : CategoryUserAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				categoryUser : { type : 'o', subTypeConstructor : KalturaCategoryUser, subType : 'KalturaCategoryUser' }
            }
        );
        return result;
    }
}

