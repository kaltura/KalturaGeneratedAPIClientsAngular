
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDistributionJobProviderDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaDistributionJobProviderData extends KalturaObjectBase {

    

    constructor(data? : KalturaDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionJobProviderData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDistributionJobProviderData',KalturaDistributionJobProviderData);
