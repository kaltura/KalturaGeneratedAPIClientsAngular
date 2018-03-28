
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaCsvAdditionalFieldInfo } from './KalturaCsvAdditionalFieldInfo';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserExportToCsvActionArgs  extends KalturaRequestArgs {
    filter? : KalturaUserFilter;
	metadataProfileId? : number;
	additionalFields? : KalturaCsvAdditionalFieldInfo[];
}

/**
 * Build request payload for service 'user' action 'exportToCsv'.
 *
 * Usage: add batch job that sends an email with a link to download an updated CSV that contains list of users
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserExportToCsvAction extends KalturaRequest<string> {

    filter : KalturaUserFilter;
	metadataProfileId : number;
	additionalFields : KalturaCsvAdditionalFieldInfo[];

    constructor(data? : UserExportToCsvActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
        if (typeof this.additionalFields === 'undefined') this.additionalFields = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'user' },
				action : { type : 'c', default : 'exportToCsv' },
				filter : { type : 'o', subTypeConstructor : KalturaUserFilter, subType : 'KalturaUserFilter' },
				metadataProfileId : { type : 'n' },
				additionalFields : { type : 'a', subTypeConstructor : KalturaCsvAdditionalFieldInfo, subType : 'KalturaCsvAdditionalFieldInfo' }
            }
        );
        return result;
    }
}

