
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionJobProviderData, KalturaDistributionJobProviderDataArgs } from './KalturaDistributionJobProviderData';

export interface KalturaDoubleClickDistributionJobProviderDataArgs  extends KalturaDistributionJobProviderDataArgs {
    
}


export class KalturaDoubleClickDistributionJobProviderData extends KalturaDistributionJobProviderData {

    

    constructor(data? : KalturaDoubleClickDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDoubleClickDistributionJobProviderData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDoubleClickDistributionJobProviderData',KalturaDoubleClickDistributionJobProviderData);
