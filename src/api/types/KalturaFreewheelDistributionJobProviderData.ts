
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFreewheelDistributionAssetPath } from './KalturaFreewheelDistributionAssetPath';
import { KalturaDistributionJobProviderData, KalturaDistributionJobProviderDataArgs } from './KalturaDistributionJobProviderData';

export interface KalturaFreewheelDistributionJobProviderDataArgs  extends KalturaDistributionJobProviderDataArgs {
    videoAssetFilePaths? : KalturaFreewheelDistributionAssetPath[];
	thumbAssetFilePath? : string;
}


export class KalturaFreewheelDistributionJobProviderData extends KalturaDistributionJobProviderData {

    videoAssetFilePaths : KalturaFreewheelDistributionAssetPath[];
	thumbAssetFilePath : string;

    constructor(data? : KalturaFreewheelDistributionJobProviderDataArgs)
    {
        super(data);
        if (typeof this.videoAssetFilePaths === 'undefined') this.videoAssetFilePaths = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFreewheelDistributionJobProviderData' },
				videoAssetFilePaths : { type : 'a', subTypeConstructor : KalturaFreewheelDistributionAssetPath, subType : 'KalturaFreewheelDistributionAssetPath' },
				thumbAssetFilePath : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFreewheelDistributionJobProviderData',KalturaFreewheelDistributionJobProviderData);
