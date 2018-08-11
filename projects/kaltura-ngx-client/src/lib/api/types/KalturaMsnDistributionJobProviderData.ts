
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaMsnDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    xml? : string;
}


export class KalturaMsnDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    xml : string;

    constructor(data? : KalturaMsnDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMsnDistributionJobProviderData' },
				xml : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMsnDistributionJobProviderData'] = KalturaMsnDistributionJobProviderData;