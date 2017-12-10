
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryContextDataResult } from './KalturaEntryContextDataResult';

import { KalturaEntryContextDataParams } from './KalturaEntryContextDataParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryGetContextDataActionArgs  extends KalturaRequestArgs {
    entryId : string;
	contextDataParams : KalturaEntryContextDataParams;
}

/**
 * Build request payload for service 'baseEntry' action 'getContextData'.
 *
 * Usage: This action delivers entry-related data, based on the user's context: access control, restriction, playback format and storage information
 *
 * Server response type:         KalturaEntryContextDataResult
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BaseEntryGetContextDataAction extends KalturaRequest<KalturaEntryContextDataResult> {

    entryId : string;
	contextDataParams : KalturaEntryContextDataParams;

    constructor(data : BaseEntryGetContextDataActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaEntryContextDataResult', responseConstructor : KalturaEntryContextDataResult  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'baseentry' },
				action : { type : 'c', default : 'getContextData' },
				entryId : { type : 's' },
				contextDataParams : { type : 'o', subTypeConstructor : KalturaEntryContextDataParams, subType : 'KalturaEntryContextDataParams' }
            }
        );
        return result;
    }
}

