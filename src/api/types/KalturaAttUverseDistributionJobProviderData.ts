
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAttUverseDistributionFile } from './KalturaAttUverseDistributionFile';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaAttUverseDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    filesForDistribution? : KalturaAttUverseDistributionFile[];
	remoteAssetFileUrls? : string;
	remoteThumbnailFileUrls? : string;
	remoteCaptionFileUrls? : string;
}


export class KalturaAttUverseDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    filesForDistribution : KalturaAttUverseDistributionFile[];
	remoteAssetFileUrls : string;
	remoteThumbnailFileUrls : string;
	remoteCaptionFileUrls : string;

    constructor(data? : KalturaAttUverseDistributionJobProviderDataArgs)
    {
        super(data);
        if (typeof this.filesForDistribution === 'undefined') this.filesForDistribution = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAttUverseDistributionJobProviderData' },
				filesForDistribution : { type : 'a', subTypeConstructor : KalturaAttUverseDistributionFile, subType : 'KalturaAttUverseDistributionFile' },
				remoteAssetFileUrls : { type : 's' },
				remoteThumbnailFileUrls : { type : 's' },
				remoteCaptionFileUrls : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAttUverseDistributionJobProviderData',KalturaAttUverseDistributionJobProviderData);
