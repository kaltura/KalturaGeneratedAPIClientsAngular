
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCsvAdditionalFieldInfo } from './KalturaCsvAdditionalFieldInfo';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaExportToCsvOptions } from './KalturaExportToCsvOptions';
import { KalturaExportCsvJobData, KalturaExportCsvJobDataArgs } from './KalturaExportCsvJobData';

export interface KalturaMappedObjectsCsvJobDataArgs  extends KalturaExportCsvJobDataArgs {
    metadataProfileId? : number;
	additionalFields? : KalturaCsvAdditionalFieldInfo[];
	mappedFields? : KalturaKeyValue[];
	options? : KalturaExportToCsvOptions;
}


export class KalturaMappedObjectsCsvJobData extends KalturaExportCsvJobData {

    metadataProfileId : number;
	additionalFields : KalturaCsvAdditionalFieldInfo[];
	mappedFields : KalturaKeyValue[];
	options : KalturaExportToCsvOptions;

    constructor(data? : KalturaMappedObjectsCsvJobDataArgs)
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
                objectType : { type : 'c', default : 'KalturaMappedObjectsCsvJobData' },
				metadataProfileId : { type : 'n' },
				additionalFields : { type : 'a', subTypeConstructor : KalturaCsvAdditionalFieldInfo, subType : 'KalturaCsvAdditionalFieldInfo' },
				mappedFields : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				options : { type : 'o', subTypeConstructor : KalturaExportToCsvOptions, subType : 'KalturaExportToCsvOptions' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMappedObjectsCsvJobData'] = KalturaMappedObjectsCsvJobData;