
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaImportJobDataArgs  extends KalturaJobDataArgs {
    srcFileUrl? : string;
	destFileLocalPath? : string;
	flavorAssetId? : string;
	fileSize? : number;
}


export class KalturaImportJobData extends KalturaJobData {

    srcFileUrl : string;
	destFileLocalPath : string;
	flavorAssetId : string;
	fileSize : number;

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
				fileSize : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaImportJobData',KalturaImportJobData);
