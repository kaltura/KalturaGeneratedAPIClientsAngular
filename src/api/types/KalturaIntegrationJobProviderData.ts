
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaIntegrationJobProviderDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaIntegrationJobProviderData extends KalturaObjectBase {

    

    constructor(data? : KalturaIntegrationJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIntegrationJobProviderData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIntegrationJobProviderData',KalturaIntegrationJobProviderData);
