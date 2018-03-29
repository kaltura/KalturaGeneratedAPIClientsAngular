
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaVerizonVcastDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    xml? : string;
}


export class KalturaVerizonVcastDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    xml : string;

    constructor(data? : KalturaVerizonVcastDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVerizonVcastDistributionJobProviderData' },
				xml : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVerizonVcastDistributionJobProviderData',KalturaVerizonVcastDistributionJobProviderData);
