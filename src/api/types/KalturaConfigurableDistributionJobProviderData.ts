
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionJobProviderData, KalturaDistributionJobProviderDataArgs } from './KalturaDistributionJobProviderData';

export interface KalturaConfigurableDistributionJobProviderDataArgs  extends KalturaDistributionJobProviderDataArgs {
    fieldValues? : string;
}


export class KalturaConfigurableDistributionJobProviderData extends KalturaDistributionJobProviderData {

    fieldValues : string;

    constructor(data? : KalturaConfigurableDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConfigurableDistributionJobProviderData' },
				fieldValues : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConfigurableDistributionJobProviderData',KalturaConfigurableDistributionJobProviderData);
