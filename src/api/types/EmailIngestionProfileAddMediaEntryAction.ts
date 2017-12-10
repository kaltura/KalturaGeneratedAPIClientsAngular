
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EmailIngestionProfileAddMediaEntryActionArgs  extends KalturaRequestArgs {
    mediaEntry : KalturaMediaEntry;
	uploadTokenId : string;
	emailProfId : number;
	fromAddress : string;
	emailMsgId : string;
}

/**
 * Build request payload for service 'EmailIngestionProfile' action 'addMediaEntry'.
 *
 * Usage: add KalturaMediaEntry from email ingestion
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EmailIngestionProfileAddMediaEntryAction extends KalturaRequest<KalturaMediaEntry> {

    mediaEntry : KalturaMediaEntry;
	uploadTokenId : string;
	emailProfId : number;
	fromAddress : string;
	emailMsgId : string;

    constructor(data : EmailIngestionProfileAddMediaEntryActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaEntry', responseConstructor : KalturaMediaEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'emailingestionprofile' },
				action : { type : 'c', default : 'addMediaEntry' },
				mediaEntry : { type : 'o', subTypeConstructor : KalturaMediaEntry, subType : 'KalturaMediaEntry' },
				uploadTokenId : { type : 's' },
				emailProfId : { type : 'n' },
				fromAddress : { type : 's' },
				emailMsgId : { type : 's' }
            }
        );
        return result;
    }
}

