
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaImportMetadataJobDataArgs  extends KalturaJobDataArgs {
    srcFileUrl? : string;
	destFileLocalPath? : string;
	metadataId? : number;
}


export class KalturaImportMetadataJobData extends KalturaJobData {

    srcFileUrl : string;
	destFileLocalPath : string;
	metadataId : number;

    constructor(data? : KalturaImportMetadataJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaImportMetadataJobData' },
				srcFileUrl : { type : 's' },
				destFileLocalPath : { type : 's' },
				metadataId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaImportMetadataJobData',KalturaImportMetadataJobData);
