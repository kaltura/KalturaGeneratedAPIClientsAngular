
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaCsvAdditionalFieldInfo } from './KalturaCsvAdditionalFieldInfo';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaExportToCsvOptions } from './KalturaExportToCsvOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserExportToCsvActionArgs  extends KalturaRequestArgs {
    filter? : KalturaUserFilter;
	metadataProfileId? : number;
	additionalFields? : KalturaCsvAdditionalFieldInfo[];
	mappedFields? : KalturaKeyValue[];
	options? : KalturaExportToCsvOptions;
}

/**
 * Build request payload for service 'user' action 'exportToCsv'.
 *
 * Usage: Creates a batch job that sends an email with a link to download a CSV containing a list of users
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class UserExportToCsvAction extends KalturaRequest<string> {

    filter : KalturaUserFilter;
	metadataProfileId : number;
	additionalFields : KalturaCsvAdditionalFieldInfo[];
	mappedFields : KalturaKeyValue[];
	options : KalturaExportToCsvOptions;

    constructor(data? : UserExportToCsvActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
        if (typeof this.additionalFields === 'undefined') this.additionalFields = [];
		if (typeof this.mappedFields === 'undefined') this.mappedFields = [];
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
				additionalFields : { type : 'a', subTypeConstructor : KalturaCsvAdditionalFieldInfo, subType : 'KalturaCsvAdditionalFieldInfo' },
				mappedFields : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				options : { type : 'o', subTypeConstructor : KalturaExportToCsvOptions, subType : 'KalturaExportToCsvOptions' }
            }
        );
        return result;
    }
}

