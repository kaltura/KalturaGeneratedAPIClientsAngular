
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaCsvAdditionalFieldInfo } from './KalturaCsvAdditionalFieldInfo';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaUsersCsvJobDataArgs  extends KalturaJobDataArgs {
    filter? : KalturaUserFilter;
	metadataProfileId? : number;
	additionalFields? : KalturaCsvAdditionalFieldInfo[];
	userName? : string;
	userMail? : string;
	outputPath? : string;
}


export class KalturaUsersCsvJobData extends KalturaJobData {

    filter : KalturaUserFilter;
	metadataProfileId : number;
	additionalFields : KalturaCsvAdditionalFieldInfo[];
	userName : string;
	userMail : string;
	outputPath : string;

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
				additionalFields : { type : 'a', subTypeConstructor : KalturaCsvAdditionalFieldInfo, subType : 'KalturaCsvAdditionalFieldInfo' },
				userName : { type : 's' },
				userMail : { type : 's' },
				outputPath : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUsersCsvJobData'] = KalturaUsersCsvJobData;