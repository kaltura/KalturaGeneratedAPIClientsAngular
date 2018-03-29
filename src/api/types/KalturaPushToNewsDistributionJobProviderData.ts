
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaPushToNewsDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    currentVersion? : number;
	bodyParamContent? : string;
}


export class KalturaPushToNewsDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    currentVersion : number;
	bodyParamContent : string;

    constructor(data? : KalturaPushToNewsDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPushToNewsDistributionJobProviderData' },
				currentVersion : { type : 'n' },
				bodyParamContent : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPushToNewsDistributionJobProviderData',KalturaPushToNewsDistributionJobProviderData);
