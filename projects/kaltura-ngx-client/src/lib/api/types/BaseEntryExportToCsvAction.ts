
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaCsvAdditionalFieldInfo } from './KalturaCsvAdditionalFieldInfo';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryExportToCsvActionArgs  extends KalturaRequestArgs {
    filter? : KalturaBaseEntryFilter;
	metadataProfileId? : number;
	additionalFields? : KalturaCsvAdditionalFieldInfo[];
	mappedFields? : KalturaKeyValue[];
}

/**
 * Build request payload for service 'baseEntry' action 'exportToCsv'.
 *
 * Usage: add batch job that sends an email with a link to download an updated CSV that contains list of entries
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class BaseEntryExportToCsvAction extends KalturaRequest<string> {

    filter : KalturaBaseEntryFilter;
	metadataProfileId : number;
	additionalFields : KalturaCsvAdditionalFieldInfo[];
	mappedFields : KalturaKeyValue[];

    constructor(data? : BaseEntryExportToCsvActionArgs)
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
                service : { type : 'c', default : 'baseentry' },
				action : { type : 'c', default : 'exportToCsv' },
				filter : { type : 'o', subTypeConstructor : KalturaBaseEntryFilter, subType : 'KalturaBaseEntryFilter' },
				metadataProfileId : { type : 'n' },
				additionalFields : { type : 'a', subTypeConstructor : KalturaCsvAdditionalFieldInfo, subType : 'KalturaCsvAdditionalFieldInfo' },
				mappedFields : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

