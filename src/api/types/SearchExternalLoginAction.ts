
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchAuthData } from './KalturaSearchAuthData';

import { KalturaSearchProviderType } from './KalturaSearchProviderType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchExternalLoginActionArgs  extends KalturaRequestArgs {
    searchSource : KalturaSearchProviderType;
	userName : string;
	password : string;
}

/**
 * Build request payload for service 'search' action 'externalLogin'.
 *
 * 
 *
 * Server response type:         KalturaSearchAuthData
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SearchExternalLoginAction extends KalturaRequest<KalturaSearchAuthData> {

    searchSource : KalturaSearchProviderType;
	userName : string;
	password : string;

    constructor(data : SearchExternalLoginActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSearchAuthData', responseConstructor : KalturaSearchAuthData  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'search' },
				action : { type : 'c', default : 'externalLogin' },
				searchSource : { type : 'en', subTypeConstructor : KalturaSearchProviderType, subType : 'KalturaSearchProviderType' },
				userName : { type : 's' },
				password : { type : 's' }
            }
        );
        return result;
    }
}

