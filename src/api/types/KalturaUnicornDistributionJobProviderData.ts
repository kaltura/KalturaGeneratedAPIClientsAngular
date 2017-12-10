
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaUnicornDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    catalogGuid? : string;
	title? : string;
	mediaChanged? : boolean;
	flavorAssetVersion? : string;
	notificationBaseUrl? : string;
}


export class KalturaUnicornDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    catalogGuid : string;
	title : string;
	mediaChanged : boolean;
	flavorAssetVersion : string;
	notificationBaseUrl : string;

    constructor(data? : KalturaUnicornDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUnicornDistributionJobProviderData' },
				catalogGuid : { type : 's' },
				title : { type : 's' },
				mediaChanged : { type : 'b' },
				flavorAssetVersion : { type : 's' },
				notificationBaseUrl : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUnicornDistributionJobProviderData',KalturaUnicornDistributionJobProviderData);
