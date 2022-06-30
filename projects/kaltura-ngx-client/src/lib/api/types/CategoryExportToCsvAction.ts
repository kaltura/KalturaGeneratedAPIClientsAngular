
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaCategoryFilter } from './KalturaCategoryFilter';
import { KalturaCsvAdditionalFieldInfo } from './KalturaCsvAdditionalFieldInfo';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaExportToCsvOptions } from './KalturaExportToCsvOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryExportToCsvActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCategoryFilter;
	metadataProfileId? : number;
	additionalFields? : KalturaCsvAdditionalFieldInfo[];
	mappedFields? : KalturaKeyValue[];
	options? : KalturaExportToCsvOptions;
}

/**
 * Build request payload for service 'category' action 'exportToCsv'.
 *
 * Usage: Creates a batch job that sends an email with a link to download a CSV containing a list of categories
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class CategoryExportToCsvAction extends KalturaRequest<string> {

    filter : KalturaCategoryFilter;
	metadataProfileId : number;
	additionalFields : KalturaCsvAdditionalFieldInfo[];
	mappedFields : KalturaKeyValue[];
	options : KalturaExportToCsvOptions;

    constructor(data? : CategoryExportToCsvActionArgs)
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
                service : { type : 'c', default : 'category' },
				action : { type : 'c', default : 'exportToCsv' },
				filter : { type : 'o', subTypeConstructor : KalturaCategoryFilter, subType : 'KalturaCategoryFilter' },
				metadataProfileId : { type : 'n' },
				additionalFields : { type : 'a', subTypeConstructor : KalturaCsvAdditionalFieldInfo, subType : 'KalturaCsvAdditionalFieldInfo' },
				mappedFields : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				options : { type : 'o', subTypeConstructor : KalturaExportToCsvOptions, subType : 'KalturaExportToCsvOptions' }
            }
        );
        return result;
    }
}

