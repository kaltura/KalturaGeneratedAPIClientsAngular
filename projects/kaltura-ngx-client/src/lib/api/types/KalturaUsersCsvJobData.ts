
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaCsvAdditionalFieldInfo } from './KalturaCsvAdditionalFieldInfo';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaExportCsvJobData, KalturaExportCsvJobDataArgs } from './KalturaExportCsvJobData';

export interface KalturaUsersCsvJobDataArgs  extends KalturaExportCsvJobDataArgs {
    filter? : KalturaUserFilter;
	metadataProfileId? : number;
	additionalFields? : KalturaCsvAdditionalFieldInfo[];
	mappedFields? : KalturaKeyValue[];
}


export class KalturaUsersCsvJobData extends KalturaExportCsvJobData {

    filter : KalturaUserFilter;
	metadataProfileId : number;
	additionalFields : KalturaCsvAdditionalFieldInfo[];
	mappedFields : KalturaKeyValue[];

    constructor(data? : KalturaUsersCsvJobDataArgs)
    {
        super(data);
        if (typeof this.additionalFields === 'undefined') this.additionalFields = [];
		if (typeof this.mappedFields === 'undefined') this.mappedFields = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUsersCsvJobData' },
				filter : { type : 'o', subTypeConstructor : KalturaUserFilter, subType : 'KalturaUserFilter' },
				metadataProfileId : { type : 'n' },
				additionalFields : { type : 'a', subTypeConstructor : KalturaCsvAdditionalFieldInfo, subType : 'KalturaCsvAdditionalFieldInfo' },
				mappedFields : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUsersCsvJobData'] = KalturaUsersCsvJobData;