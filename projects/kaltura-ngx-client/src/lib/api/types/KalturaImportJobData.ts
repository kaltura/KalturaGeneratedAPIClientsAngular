
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaImportJobDataArgs  extends KalturaJobDataArgs {
    srcFileUrl? : string;
	destFileLocalPath? : string;
	flavorAssetId? : string;
	fileSize? : number;
	destFileSharedPath? : string;
}


export class KalturaImportJobData extends KalturaJobData {

    srcFileUrl : string;
	destFileLocalPath : string;
	flavorAssetId : string;
	fileSize : number;
	destFileSharedPath : string;

    constructor(data? : KalturaImportJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaImportJobData' },
				srcFileUrl : { type : 's' },
				destFileLocalPath : { type : 's' },
				flavorAssetId : { type : 's' },
				fileSize : { type : 'n' },
				destFileSharedPath : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaImportJobData'] = KalturaImportJobData;