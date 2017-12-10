
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaMetroPcsDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    assetLocalPaths? : string;
	thumbUrls? : string;
}


export class KalturaMetroPcsDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    assetLocalPaths : string;
	thumbUrls : string;

    constructor(data? : KalturaMetroPcsDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetroPcsDistributionJobProviderData' },
				assetLocalPaths : { type : 's' },
				thumbUrls : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetroPcsDistributionJobProviderData',KalturaMetroPcsDistributionJobProviderData);
