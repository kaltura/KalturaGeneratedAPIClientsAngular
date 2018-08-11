
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConvartableJobData, KalturaConvartableJobDataArgs } from './KalturaConvartableJobData';

export interface KalturaExtractMediaJobDataArgs  extends KalturaConvartableJobDataArgs {
    flavorAssetId? : string;
	calculateComplexity? : boolean;
	extractId3Tags? : boolean;
	destDataFilePath? : string;
	detectGOP? : number;
}


export class KalturaExtractMediaJobData extends KalturaConvartableJobData {

    flavorAssetId : string;
	calculateComplexity : boolean;
	extractId3Tags : boolean;
	destDataFilePath : string;
	detectGOP : number;

    constructor(data? : KalturaExtractMediaJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExtractMediaJobData' },
				flavorAssetId : { type : 's' },
				calculateComplexity : { type : 'b' },
				extractId3Tags : { type : 'b' },
				destDataFilePath : { type : 's' },
				detectGOP : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaExtractMediaJobData'] = KalturaExtractMediaJobData;