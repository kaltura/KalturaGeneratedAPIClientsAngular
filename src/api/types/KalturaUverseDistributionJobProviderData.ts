
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaUverseDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    localAssetFilePath? : string;
	remoteAssetUrl? : string;
	remoteAssetFileName? : string;
}


export class KalturaUverseDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    localAssetFilePath : string;
	remoteAssetUrl : string;
	remoteAssetFileName : string;

    constructor(data? : KalturaUverseDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUverseDistributionJobProviderData' },
				localAssetFilePath : { type : 's' },
				remoteAssetUrl : { type : 's' },
				remoteAssetFileName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUverseDistributionJobProviderData',KalturaUverseDistributionJobProviderData);
