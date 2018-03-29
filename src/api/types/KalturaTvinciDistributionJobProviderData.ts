
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaTvinciDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    xml? : string;
}


export class KalturaTvinciDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    xml : string;

    constructor(data? : KalturaTvinciDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTvinciDistributionJobProviderData' },
				xml : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTvinciDistributionJobProviderData',KalturaTvinciDistributionJobProviderData);
