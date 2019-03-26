
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaCsvAdditionalFieldInfo } from './KalturaCsvAdditionalFieldInfo';
import { KalturaExportCsvJobData, KalturaExportCsvJobDataArgs } from './KalturaExportCsvJobData';

export interface KalturaUsersCsvJobDataArgs  extends KalturaExportCsvJobDataArgs {
    filter? : KalturaUserFilter;
	metadataProfileId? : number;
	additionalFields? : KalturaCsvAdditionalFieldInfo[];
}


export class KalturaUsersCsvJobData extends KalturaExportCsvJobData {

    filter : KalturaUserFilter;
	metadataProfileId : number;
	additionalFields : KalturaCsvAdditionalFieldInfo[];

    constructor(data? : KalturaUsersCsvJobDataArgs)
    {
        super(data);
        if (typeof this.additionalFields === 'undefined') this.additionalFields = [];
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
				additionalFields : { type : 'a', subTypeConstructor : KalturaCsvAdditionalFieldInfo, subType : 'KalturaCsvAdditionalFieldInfo' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUsersCsvJobData'] = KalturaUsersCsvJobData;