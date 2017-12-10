
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaMsnDistributionJobProviderData',KalturaMsnDistributionJobProviderData);
