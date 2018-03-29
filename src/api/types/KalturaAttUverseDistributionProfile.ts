
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaAttUverseDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    ftpHost? : string;
	ftpUsername? : string;
	ftpPassword? : string;
	ftpPath? : string;
	channelTitle? : string;
	flavorAssetFilenameXslt? : string;
	thumbnailAssetFilenameXslt? : string;
	assetFilenameXslt? : string;
}


export class KalturaAttUverseDistributionProfile extends KalturaConfigurableDistributionProfile {

    readonly feedUrl : string;
	ftpHost : string;
	ftpUsername : string;
	ftpPassword : string;
	ftpPath : string;
	channelTitle : string;
	flavorAssetFilenameXslt : string;
	thumbnailAssetFilenameXslt : string;
	assetFilenameXslt : string;

    constructor(data? : KalturaAttUverseDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAttUverseDistributionProfile' },
				feedUrl : { type : 's', readOnly : true },
				ftpHost : { type : 's' },
				ftpUsername : { type : 's' },
				ftpPassword : { type : 's' },
				ftpPath : { type : 's' },
				channelTitle : { type : 's' },
				flavorAssetFilenameXslt : { type : 's' },
				thumbnailAssetFilenameXslt : { type : 's' },
				assetFilenameXslt : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAttUverseDistributionProfile',KalturaAttUverseDistributionProfile);
