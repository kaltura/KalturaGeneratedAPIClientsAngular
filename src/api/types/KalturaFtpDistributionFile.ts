
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaFtpDistributionFileArgs  extends KalturaObjectBaseArgs {
    assetId? : string;
	filename? : string;
	contents? : string;
	localFilePath? : string;
	version? : string;
	hash? : string;
}


export class KalturaFtpDistributionFile extends KalturaObjectBase {

    assetId : string;
	filename : string;
	contents : string;
	localFilePath : string;
	version : string;
	hash : string;

    constructor(data? : KalturaFtpDistributionFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFtpDistributionFile' },
				assetId : { type : 's' },
				filename : { type : 's' },
				contents : { type : 's' },
				localFilePath : { type : 's' },
				version : { type : 's' },
				hash : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFtpDistributionFile',KalturaFtpDistributionFile);
